'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 })
  const pathname = usePathname()
  const navRef = useRef(null)

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' }
  ]

  const updateUnderline = (element) => {
    if (element && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = element.getBoundingClientRect()
      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left
      })
    }
  }

  const resetToActive = () => {
    const activeLink = navRef.current?.querySelector('.active')
    if (activeLink) {
      updateUnderline(activeLink)
    }
  }

  useEffect(() => {
    resetToActive()
  }, [pathname])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
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
        <ul 
          ref={navRef}
          className={isMobileMenuOpen ? 'mobile-nav' : ''}
          onMouseLeave={resetToActive}
        >
          {navItems.map(item => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={pathname === item.path ? 'active' : ''}
                onClick={handleNavClick}
                onMouseEnter={(e) => updateUnderline(e.currentTarget)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <span 
            style={{
              position: 'absolute',
              bottom: '-5px',
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`,
              height: '1px',
              background: 'var(--accent-color)',
              transition: 'all 0.3s ease',
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