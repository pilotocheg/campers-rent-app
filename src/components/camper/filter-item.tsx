import clsx from 'clsx';

import FeatureIcon from './feature-icon';

interface FilterItemProps {
  onClick: () => void;
  feature: string;
  label?: string;
  isActive: boolean;
  className?: string;
}

export default function FilterItem({
  onClick,
  feature,
  label,
  isActive,
  className,
}: FilterItemProps) {
  return (
    <button
      className={clsx(
        'border-border flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border bg-transparent px-3 py-1 transition-colors duration-300',
        isActive ? 'border-primary' : 'hover:border-primary',
        className,
      )}
      onClick={onClick}
    >
      <FeatureIcon feature={feature} size={32} />
      <span className="text-text text-center">{label || feature}</span>
    </button>
  );
}
