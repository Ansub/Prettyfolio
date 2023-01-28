import React, { useState } from "react"
import NextImage from "next/image"

interface ImageProps {
  src: string
  height: number
  width: number
  className?: string
  alt: string
}

export default function Image({
  src,
  height,
  width,
  className,
  alt,
}: ImageProps) {
  const [ready, setReady] = useState(false)

  const handleLoad = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.persist()
    if (event.target?.srcset) {
      setReady(true)
    }
  }

  return (
    <div
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity .3s ease-in-out",
      }}
    >
      <NextImage
        className={className}
        src={src}
        alt={alt}
        height={height}
        width={width}
        onLoad={handleLoad}
      />
    </div>
  )
}
