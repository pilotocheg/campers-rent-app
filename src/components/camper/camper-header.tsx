import Image from 'next/image';
import {
  formatPrice,
  formatLocation,
  formatReviewCount,
} from '@/lib/utils/formatters';
import FavoriteButton from '@/components/common/favorite-button';
import type { Camper } from '@/lib/api/campers';

interface CamperHeaderProps {
  camper: Camper;
  parent: 'catalog' | 'details';
}

export default function CamperHeader({ camper, parent }: CamperHeaderProps) {
  const isDetailsPage = parent === 'details';
  const TitleComponent = isDetailsPage ? 'h2' : 'h3';

  return (
    <div className="flex flex-col gap-2 self-stretch">
      <div className="flex items-start justify-between">
        <TitleComponent className="text-2xl leading-8 font-semibold">
          {camper.name}
        </TitleComponent>

        {!isDetailsPage && (
          <div className="flex items-center gap-3">
            <span className="text-2xl leading-8 font-semibold">
              {formatPrice(camper.price)}
            </span>
            <FavoriteButton camperId={camper.id} />
          </div>
        )}
      </div>

      <div className="flex items-center">
        <Image
          src="/star-filled.svg"
          alt=""
          width={16}
          height={16}
          className="mr-1 shrink-0"
        />
        <span className="cursor-pointer underline hover:no-underline">
          {camper.rating}({formatReviewCount(camper.reviews?.length || 0)})
        </span>
        <Image
          src="/map.svg"
          alt=""
          width={16}
          height={16}
          className="mr-1 ml-4 shrink-0"
        />
        <span>{formatLocation(camper.location)}</span>
      </div>

      {isDetailsPage && (
        <div className="mt-2 flex items-center gap-3">
          <span className="text-2xl leading-8 font-semibold">
            {formatPrice(camper.price)}
          </span>
        </div>
      )}
    </div>
  );
}
