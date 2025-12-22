'use client'

import { Play, Pause } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return

    const video = videoRef.current
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const togglePlay = async () => {
    if (!videoRef.current) return

    try {
      videoRef.current.paused
        ? await videoRef.current.play()
        : videoRef.current.pause()
    } catch (error) {
      console.error('Error playing/pausing video:', error)
    }
  }

  return (
  <section className="relative w-full bg-emerald-900/90 overflow-hidden">
  {/* Pattern */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15] z-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="facilities-diamonds"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
          fill="none"
          stroke="#34d399"
          strokeWidth="0.3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#facilities-diamonds)" />
  </svg>

  {/* Video container */}
  <div
    className="
      relative
      z-10
      w-full
      overflow-hidden
      aspect-[9/16]
      md:aspect-[16/9]
      max-h-[80vh]
    "
  >
    {/* MOBILE */}
    <video
      ref={videoRef}
      src="/video/promo2.mp4"
      className="absolute inset-0 w-full h-full object-contain md:hidden"
      autoPlay
      loop
      muted
      playsInline
    />

    {/* DESKTOP */}
    <video
      src="/video/promo.mp4"
      className="absolute inset-0 w-full h-full object-contain hidden md:block"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
</section>

  )
}
