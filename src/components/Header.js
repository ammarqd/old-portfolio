'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useMemo } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef([])
  const pathname = usePathname()

  const navItems = useMemo(() => [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' }
  ], [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Set underline under active link on mount or pathname change
    const activeIndex = navItems.findIndex(item => item.path === pathname)
    if (navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = navRefs.current[activeIndex]
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [pathname, navItems])

  const handleMouseEnter = (index) => {
    if (navRefs.current[index]) {
      const { offsetLeft, offsetWidth } = navRefs.current[index]
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth })
    }
  }

  const handleMouseLeave = () => {
    // Reset underline to active link
    const activeIndex = navItems.findIndex(item => item.path === pathname)
    if (navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = navRefs.current[activeIndex]
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth })
    }
  }

  return (
    <header>
      <Link href="/">
        <h1 id="logo">
          A
          <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Zm0-205.60889a4.00152,4.00152,0,0,0-1.96814.51465l-84,47.47827A4.00672,4.00672,0,0,0,40,80.66772v94.66456a4.00658,4.00658,0,0,0,2.032,3.48242L126.03186,226.293a4.0215,4.0215,0,0,0,3.93628,0l84-47.47827A4.00672,4.00672,0,0,0,216,175.33228V80.66772a4.00658,4.00658,0,0,0-2.032-3.48242L129.96814,29.707A4.00152,4.00152,0,0,0,128,29.19238Z"/>
          </svg>
        </h1>
      </Link>

      <nav>
        <ul className={isMobileMenuOpen ? 'mobile-nav' : ''}>
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.path}
                ref={(el) => (navRefs.current[index] = el)}
                onClick={handleNavClick}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* moving underline */}
          <span
            className="moving-underline"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </ul>

        <div
          className={`menu-toggle ${isMobileMenuOpen ? 'mobile-nav' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  )
}
