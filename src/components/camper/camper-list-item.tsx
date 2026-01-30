import Button from '@/components/common/button';
import type { Camper } from '@/lib/api/campers';
import { getCamperRoute } from '@/lib/constants/routes';

import CamperHeader from './camper-header';
import FeaturesList from './features-list';
import CamperImage from './camper-image';

interface CamperListItemProps {
  camper: Camper;
}

export default function CamperListItem({ camper }: CamperListItemProps) {
  const camperImage = camper.gallery[0];

  return (
    <li>
      <div className="border-border flex gap-6 overflow-hidden rounded-[20px] border bg-white p-6 transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <CamperImage
          src={camperImage.thumb || camperImage.original}
          alt={camper.name}
        />

        <div className="flex flex-1 flex-col items-start justify-center gap-6">
          <CamperHeader camper={camper} parent="catalog" />

          <p className="text-text-secondary line-clamp-1">
            {camper.description}
          </p>

          <FeaturesList camper={camper} parent="list" />

          <Button linkTo={getCamperRoute(camper.id)}>Show more</Button>
        </div>
      </div>
    </li>
  );
}
