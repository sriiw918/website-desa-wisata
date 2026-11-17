import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#012d1d] p-6 text-center text-[#f9faf6] ${className}`}
      >
        <Mountain className="mb-2 h-8 w-8 text-[#a5d0b9]" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-tight">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
