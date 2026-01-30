import clsx from 'clsx';

import type { Camper } from '@/lib/api/campers';

import FeatureLabel from './feature-label';

interface FeaturesListProps {
  camper: Camper;
  parent: 'list' | 'details';
}

export default function FeaturesList({ camper, parent }: FeaturesListProps) {
  const features = [
    camper.transmission,
    camper.engine,
    camper.AC && 'AC',
    camper.bathroom && 'bathroom',
    camper.kitchen && 'kitchen',
    camper.TV && 'TV',
    camper.radio && 'radio',
    camper.refrigerator && 'refrigerator',
    camper.microwave && 'microwave',
    camper.gas && 'gas',
    camper.water && 'water',
  ].filter(Boolean) as string[];

  return (
    <div
      className={clsx(
        'flex flex-wrap gap-2',
        parent === 'list' && 'max-h-[calc(2*(48px+8px))] overflow-hidden',
      )}
    >
      {features.map((feature) => (
        <FeatureLabel key={feature} feature={feature} />
      ))}
    </div>
  );
}
