import { FC } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, alt, className, fallbackSrc = '/path/to/fallback.png' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = fallbackSrc; // Set fallback image on error
      }}
    />
  );
};

export default ImageWithFallback;
