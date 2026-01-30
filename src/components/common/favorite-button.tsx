'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { useIsFavorite } from '@/hooks/selectors/use-is-favorite';
import { useFavoritesActions } from '@/hooks/actions/use-favorites-actions';

interface FavoriteButtonProps {
  camperId: string;
  className?: string;
}

export default function FavoriteButton({
  camperId,
  className,
}: FavoriteButtonProps) {
  const { toggleFavorite } = useFavoritesActions();
  const isFavorite = useIsFavorite(camperId);

  const handleFavoriteToggle = () => {
    toggleFavorite(camperId);
  };

  return (
    <button
      className={clsx(
        'flex items-center justify-center transition-opacity duration-300 hover:opacity-70',
        className,
      )}
      onClick={handleFavoriteToggle}
      type="button"
    >
      <Image
        src={isFavorite ? '/heart-filled.svg' : '/heart.svg'}
        alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        width={20}
        height={20}
        className="block shrink-0"
      />
    </button>
  );
}
