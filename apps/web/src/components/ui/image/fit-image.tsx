import Image from 'next/image';
import React from 'react';

function FitImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}): JSX.Element {
  return (
    <figure className={`${className} w-full h-full`}>
      <Image
        alt={alt}
        className="object-cover w-full h-full"
        height={800}
        priority
        src={src}
        width={800}
      />
    </figure>
  );
}

export default FitImage;
