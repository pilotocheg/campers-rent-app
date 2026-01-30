import type { Camper } from '@/lib/api/campers';

import CamperImage from './camper-image';

interface CamperGalleryProps {
  camper: Camper;
}

export default function CamperGallery({ camper }: CamperGalleryProps) {
  if (!camper.gallery?.length) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      <div className="scrollbar-thin -mb-2 flex gap-4 overflow-x-auto pb-2">
        {camper.gallery.map((image, index) => (
          <CamperImage
            key={index}
            src={image.thumb || image.original}
            alt={`${camper.name} ${index + 1}`}
            className="h-[312px]"
          />
        ))}
      </div>
    </div>
  );
}
