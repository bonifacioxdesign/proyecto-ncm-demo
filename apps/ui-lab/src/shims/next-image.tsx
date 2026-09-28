import type { ImgHTMLAttributes } from "react"

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  priority?: boolean
  fill?: boolean
  quality?: number
  unoptimized?: boolean
}

/** Shim: next/image → <img> for Vite lab */
export default function Image({
  src,
  alt,
  width,
  height,
  priority: _priority,
  fill,
  quality: _quality,
  unoptimized: _unoptimized,
  className,
  style,
  ...props
}: ImageProps) {
  return (
    <img
      src={typeof src === "string" ? src : String(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={
        fill
          ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
          : style
      }
      {...props}
    />
  )
}
