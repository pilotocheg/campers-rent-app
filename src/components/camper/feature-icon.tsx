import Image from 'next/image';

const featureIconMap: Record<string, string> = {
  // Transmission
  automatic: '/gears.svg',
  manual: '/gears.svg',

  // Engine
  diesel: '/gas-tank.svg',
  petrol: '/gas-tank.svg',
  hybrid: '/gas-tank.svg',

  // Features
  AC: '/wind.svg',
  bathroom: '/shower.svg',
  kitchen: '/cup-hot.svg',
  TV: '/tv.svg',
  radio: '/tv.svg',
  refrigerator: '/fridge.svg',
  microwave: '/microwave.svg',
  gas: '/gas-tank.svg',
  water: '/water.svg',

  // Vehicle types
  alcove: '/grid-3.svg',
  fullyIntegrated: '/grid-4.svg',
  panelTruck: '/grid-9.svg',
};

interface FeatureIconProps {
  feature: string;
  size: number;
}

export default function FeatureIcon({ feature, size }: FeatureIconProps) {
  const iconSrc = featureIconMap[feature];

  if (!iconSrc) return null;

  return (
    <Image
      src={iconSrc}
      alt={feature}
      width={size}
      height={size}
      className="shrink-0"
    />
  );
}
