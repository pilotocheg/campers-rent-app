import { vehicleTypes } from '@/lib/constants';
import type { Camper } from '@/lib/api/campers';

interface DetailsListProps {
  camper: Camper;
}

export default function DetailsList({ camper }: DetailsListProps) {
  const form = vehicleTypes.find((type) => type.id === camper.form)?.label;

  const details = [
    { label: 'Form', value: form },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <div>
      <h3 className="text-xl leading-6 font-semibold">Vehicle details</h3>
      <div className="border-border mt-6 flex flex-col gap-4 border-t pt-6">
        {details.map((detail) => (
          <div key={detail.label} className="flex justify-between font-medium">
            <span>{detail.label}</span>
            <span>{detail.value || 'N/A'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
