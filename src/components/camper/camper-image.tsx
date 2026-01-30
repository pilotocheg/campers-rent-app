import clsx from 'clsx';
import Image from 'next/image';

interface CamperImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CamperImage({ src, alt, className }: CamperImageProps) {
  return (
    <div
      className={clsx(
        'h-80 w-[292px] shrink-0 overflow-hidden rounded-[10px]',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={292}
        height={320}
        className="h-full w-full object-cover"
        unoptimized
      />
    </div>
  );
}
