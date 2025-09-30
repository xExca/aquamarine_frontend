import { useEffect, useRef, useState } from "react"
import { GoPerson } from "react-icons/go"

const images = [
  "assets/hero/hero_image_1.jpg",
  "assets/hero/hero_image_2.jpg",
  "assets/hero/hero_image_3.jpg",
  "assets/hero/hero_image_4.jpg",
  "assets/hero/hero_image_5.jpg",
]

// dot sizing
const DOT_W = 20   // w-5
const GAP = 8      // gap-2
const STEP = DOT_W + GAP
const ACTIVE_W = 40 // w-10
const SLIDE_BEFORE_GROW_MS = 120

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [growIndex, setGrowIndex] = useState(0)
  const delayRef = useRef<number | null>(null)

  const goTo = (i: number) => {
    setCurrentIndex(i)
    if (delayRef.current) window.clearTimeout(delayRef.current)
    delayRef.current = window.setTimeout(() => setGrowIndex(i), SLIDE_BEFORE_GROW_MS) as unknown as number
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % images.length
        if (delayRef.current) window.clearTimeout(delayRef.current)
        delayRef.current = window.setTimeout(() => setGrowIndex(nextIndex), SLIDE_BEFORE_GROW_MS) as unknown as number
        return nextIndex
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 80px)" }}>
      <img
        src={images[currentIndex]}
        alt={`hero-${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="p-4">
          <button className="bg-stone-600 text-white p-3 hover:bg-stone-800 transition inline-flex items-center">
            <GoPerson /> &nbsp; Shop Now &gt;
          </button>
        </div>

        <div className="pb-6 flex justify-center">
          <div className="relative inline-flex items-center gap-2">
            <span
              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-white/70 transition-transform duration-500 ease-in-out"
              style={{
                width: ACTIVE_W,
                transform: `translateX(${currentIndex * STEP}px)`,
              }}
            />

            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`relative z-10 h-2 rounded-full transition-all ${
                  growIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                style={{
                  width: growIndex === index ? ACTIVE_W : DOT_W,
                  transitionDuration: "400ms",
                  transitionTimingFunction: "ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
