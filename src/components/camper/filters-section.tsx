import FilterItem from './filter-item';

interface Filter {
  id: string;
  label: string;
}

interface FiltersSectionProps {
  title: string;
  filters: readonly Filter[];
  checkIsActive: (id: string) => boolean;
  onFeatureToggle: (id: string) => void;
}

export default function FiltersSection({
  title,
  filters,
  checkIsActive,
  onFeatureToggle,
}: FiltersSectionProps) {
  return (
    <div>
      <h4 className="text-xl leading-6 font-semibold">{title}</h4>
      <div className="border-border mt-6 grid grid-cols-3 gap-2 border-t pt-6">
        {filters.map(({ id, label }) => (
          <FilterItem
            key={id}
            feature={id}
            label={label}
            isActive={checkIsActive(id)}
            onClick={() => onFeatureToggle(id)}
          />
        ))}
      </div>
    </div>
  );
}
