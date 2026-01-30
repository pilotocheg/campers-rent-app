import clsx from 'clsx';
import FeatureIcon from './feature-icon';

interface FeatureLabelProps {
  feature: string;
  className?: string;
}

export default function FeatureLabel({
  feature,
  className,
}: FeatureLabelProps) {
  return (
    <span
      className={clsx(
        'bg-border-light text-text inline-flex h-12 items-center gap-2 rounded-full px-[18px] text-base leading-[1.25] font-medium whitespace-nowrap',
        className,
      )}
    >
      <FeatureIcon feature={feature} size={20} />
      <span className="capitalize">{feature}</span>
    </span>
  );
}
