'use client'

import { useState, useEffect } from 'react'

export default function ScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p className="font-light opacity-50 text-xs">
      Current screen width: <span className="font-black">{screenWidth}px</span>
    </p>
  )
}
