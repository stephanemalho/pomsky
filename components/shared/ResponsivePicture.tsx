import { cn } from "@/lib/utils"

type ResponsivePictureSources = {
  avif: string
  webp: string
}

type ResponsivePictureProps = {
  alt: string
  sources: ResponsivePictureSources
  fallback: string
  width: number
  height: number
  sizes: string
  className?: string
  imgClassName?: string
  loading?: "eager" | "lazy"
  fetchPriority?: "high" | "low" | "auto"
  decoding?: "async" | "sync" | "auto"
}

export function ResponsivePicture({
  alt,
  sources,
  fallback,
  width,
  height,
  sizes,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
}: ResponsivePictureProps) {
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
      <source type="image/webp" srcSet={sources.webp} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        className={cn("block h-auto max-w-full", imgClassName)}
      />
    </picture>
  )
}
