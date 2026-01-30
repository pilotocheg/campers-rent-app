import Image from 'next/image';
import { getInitials } from '@/lib/utils/formatters';
import type { Review } from '@/lib/api/campers';

interface CamperReviewItemProps {
  review: Review;
}

const starsArray = [...Array(5)];

export default function CamperReviewItem({ review }: CamperReviewItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-border-light flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full">
          <span className="text-primary text-2xl font-semibold uppercase">
            {getInitials(review.reviewer_name)}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-medium">{review.reviewer_name}</div>
          <div className="flex items-center gap-1">
            {starsArray.map((_, i) => (
              <Image
                key={i}
                src={
                  i < review.reviewer_rating ? '/star-filled.svg' : '/star.svg'
                }
                alt=""
                width={16}
                height={16}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-text-secondary">{review.comment}</p>
    </div>
  );
}
