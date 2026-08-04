import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export default function SafeImage({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const fileName = src.split("/").pop();

  if (failed) {
    return (
      <div
        className={`image-fallback ${className ?? ""}`}
        style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
        role="img"
        aria-label={alt}
      >
        <span>Adicione esta imagem em /public/{fileName}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
