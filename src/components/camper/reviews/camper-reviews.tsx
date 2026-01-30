import type { Camper } from '@/lib/api/campers';

import CamperReviewItem from './camper-review-item';

interface CamperReviewsProps {
  camper: Camper;
}

export default function CamperReviews({ camper }: CamperReviewsProps) {
  const { reviews } = camper;

  const renderReviews = () => {
    if (!reviews?.length) {
      return (
        <p className="text-text-muted p-8 text-center italic">
          No reviews yet.
        </p>
      );
    }

    return reviews.map((review, index) => (
      <CamperReviewItem key={index} review={review} />
    ));
  };

  return (
    <div className="scrollbar-thin -mr-2 flex max-h-full flex-col gap-11 overflow-y-auto pr-2">
      {renderReviews()}
    </div>
  );
}
