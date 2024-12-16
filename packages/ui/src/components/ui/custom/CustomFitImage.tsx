import Image from 'next/image';

function CustomFitImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}): JSX.Element {
  return (
    <figure className={`${className}`}>
      <Image
        alt={alt}
        className="w-full h-full"
        height={800}
        priority
        src={src ? src : '/assets/images/imageDummy.jpg'}
        width={800}
      />
    </figure>
  );
}
export default CustomFitImage;
