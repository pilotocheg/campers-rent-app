export const PAGE_SIZE = 5;

export const equipmentOptions = [
  { id: 'AC', label: 'AC' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'TV', label: 'TV' },
  { id: 'radio', label: 'Radio' },
  { id: 'refrigerator', label: 'Refrigerator' },
  { id: 'microwave', label: 'Microwave' },
  { id: 'gas', label: 'Gas' },
  { id: 'water', label: 'Water' },
] as const;

export const vehicleTypes = [
  { id: 'alcove', label: 'Alcove' },
  { id: 'fullyIntegrated', label: 'Fully Integrated' },
  { id: 'panelTruck', label: 'Van' },
] as const;

export type EquipmentId = (typeof equipmentOptions)[number]['id'];
export type VehicleTypeId = (typeof vehicleTypes)[number]['id'];
