"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Eye } from "lucide-react"
import { useRef } from "react"

const glimpseImages = [
  {
    id: 1,
    src: "/images/IMG_3241.jpg",
    alt: "Brainstorming session",
    title: "Brainstorming Session",
    description: "Intense brainstorming sessions with creative energy.",
    height: 500,
  },
  {
    id: 2,
    src: "/images/IMG_3333.jpg",
    alt: "Team formation and networking",
    title: "Team Formation",
    description: "Students networking and forming diverse teams.",
    height: 320,
  },
  {
    id: 3,
    src: "/images/IMG_20220726_141622.jpg",
    alt: "Prototype development",
    title: "Prototype Development",
    description: "Teams working on their innovative prototypes.",
    height: 420,
  },
  {
    id: 4,
    src: "/images/IMG_3347.jpg",
    alt: "Participants at the event - Opening Ceremony",
    title: "Opening Ceremony",
    description: "The grand opening with 500+ enthusiastic participants.",
    height: 400,
  },
  {
    id: 5,
    src: "/images/IMG_20220726_143924 (1).jpg",
    alt: "Pitch presentations",
    title: "Pitch Presentations",
    description: "Compelling presentations of groundbreaking ideas.",
    height: 360,
  },
  {
    id: 6,
    src: "/images/IMG_3226.jpg",
    alt: "Mentorship round with industry experts",
    title: "Mentorship Round",
    description: "Industry experts providing valuable guidance.",
    height: 350,
  },
  {
    id: 7,
    src: "/images/IMG_20220726_163914.jpg",
    alt: "Judging panel evaluating solutions",
    title: "Judging Panel",
    description: "Expert judges evaluating innovative solutions.",
    height: 380,
  },
  {
    id: 8,
    src: "/images/IMG_20220726_133932 (1).jpg",
    alt: "Networking session",
    title: "Networking Session",
    description: "Valuable networking with industry leaders.",
    height: 340,
  },
  {
    id: 9,
    src: "/images/IMG_20220726_135419 (1).jpg",
    alt: "Award ceremony",
    title: "Award Ceremony",
    description: "Celebrating the winners and their achievements.",
    height: 400,
  },
]

export default function GlimpsesPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof glimpseImages)[0] | null>(null)
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [start, setStart] = useState({ x: 0, y: 0 })
  const imgRef = useRef<HTMLImageElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Fullscreen API
  const handleFullscreen = () => {
    if (!isFullscreen && modalRef.current) {
      if (modalRef.current.requestFullscreen) modalRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Zoom handlers
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    setZoom((z) => Math.max(1, Math.min(3, z + (e.deltaY < 0 ? 0.2 : -0.2))))
  }
  const handleDoubleClick = () => setZoom((z) => (z === 1 ? 2 : 1))
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setStart({
        x: Math.abs(e.touches[0].clientX - e.touches[1].clientX),
        y: Math.abs(e.touches[0].clientY - e.touches[1].clientY),
      })
    }
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distX = Math.abs(e.touches[0].clientX - e.touches[1].clientX)
      const distY = Math.abs(e.touches[0].clientY - e.touches[1].clientY)
      const scale = Math.max(1, Math.min(3, zoom + (distX - start.x) / 200))
      setZoom(scale)
    }
  }
  // Drag to pan
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) setPan({ x: e.clientX - start.x, y: e.clientY - start.y })
  }
  const handleMouseUp = () => setDragging(false)
  const handleReset = () => { setZoom(1); setPan({ x: 0, y: 0 }) }

  // Swipe gesture handlers
  const touchStartX = useRef(0)
  const handleTouchStartModal = (e: React.TouchEvent) => {
    if (e.touches.length === 1) touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEndModal = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && selectedIndex !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      if (deltaX > 60 && selectedIndex > 0) setSelectedIndex(selectedIndex - 1)
      if (deltaX < -60 && selectedIndex < glimpseImages.length - 1) setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <div className="min-h-screen px-4 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 neon-text">
            Past <span className="text-gradient">Glimpses</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Catch the highlights of past Ideathons: unstoppable energy, bold creativity, and game-changing innovations.
          </p>
        </section>

        {/* Pinterest-style Masonry Grid */}
        <section className="columns-2 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><style jsx>{`
          .masonry-item { break-inside: avoid; margin-bottom: 1.5rem; }
        `}</style>
          {glimpseImages.map((image, idx) => (
            <div
              key={image.id}
              className="masonry-item glass-effect-strong rounded-2xl overflow-hidden cursor-pointer group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => { setSelectedImage(image); setSelectedIndex(idx); }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={180}
                  height={image.height}
                  className="w-full max-w-[90vw] sm:max-w-[320px] h-auto object-cover image-hover mx-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Eye className="text-white" size={24} />
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-bold text-base mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-xs leading-relaxed">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4"
            onTouchStart={handleTouchStartModal}
            onTouchEnd={handleTouchEndModal}
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center">
              {/* Cross button always visible in fullscreen */}
              <button
                onClick={() => { setSelectedImage(null); setSelectedIndex(null); }}
                className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:text-cyan-400 transition-colors z-20"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              <button
                onClick={handleFullscreen}
                className="absolute top-4 left-4 text-white bg-black/60 rounded-full p-2 hover:text-cyan-400 transition-colors z-20"
                aria-label="Fullscreen"
              >
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </button>
              <div
                className="glass-effect-strong rounded-3xl overflow-hidden flex flex-col items-center justify-center"
                style={{ touchAction: 'none', maxHeight: '80vh', maxWidth: '95vw' }}
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => setStart({ x: 0, y: 0 })}
              >
                <img
                  ref={imgRef}
                  src={glimpseImages[selectedIndex].src || "/placeholder.svg"}
                  alt={glimpseImages[selectedIndex].alt}
                  style={{
                    width: '100%',
                    maxWidth: 800,
                    maxHeight: '70vh',
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                    transition: dragging ? 'none' : 'transform 0.3s',
                    cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
                  }}
                  onClick={() => setZoom(zoom === 1 ? 2 : 1)}
                  draggable={false}
                />
                {(zoom > 1 || pan.x !== 0 || pan.y !== 0) && (
                  <button onClick={handleReset} className="absolute top-4 right-20 bg-black/60 text-white px-3 py-1 rounded-full text-xs z-20">Reset</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
