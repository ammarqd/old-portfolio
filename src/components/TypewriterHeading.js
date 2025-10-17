'use client'

import { useState, useEffect } from 'react'

export default function TypewriterHeading({ prefix, text, delay = 50 }) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayText('')
    setIsComplete(false)
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [text, delay])

  return (
    <h4 className={isComplete ? 'complete' : ''}>
      {prefix}{displayText}
    </h4>
  )
}