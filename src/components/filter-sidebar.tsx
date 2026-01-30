'use client';

import { useEffect, ChangeEvent } from 'react';

import { vehicleTypes, equipmentOptions } from '@/lib/constants';
import type { EquipmentId, VehicleTypeId } from '@/lib/constants';
import { useLocation } from '@/hooks/selectors/use-location';
import { useSelectedVehicleType } from '@/hooks/selectors/use-selected-vehicle-type';
import { useSelectedEquipment } from '@/hooks/selectors/use-selected-equipment';
import { useCampersActions } from '@/hooks/actions/use-campers-actions';
import { useFiltersActions } from '@/hooks/actions/use-filters-actions';

import FiltersSection from './camper/filters-section';
import LocationInput from './camper/location-input';
import Button from './common/button';

export default function FilterSidebar() {
  const location = useLocation();
  const selectedVehicleType = useSelectedVehicleType();
  const selectedEquipment = useSelectedEquipment();

  const { getCampers } = useCampersActions();
  const { setLocation, setType, toggleEquipment, resetFilters } =
    useFiltersActions();

  useEffect(() => () => resetFilters(), [resetFilters]);

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    getCampers(true);
  };

  return (
    <div className="flex flex-col gap-10">
      <LocationInput
        value={location}
        onChange={handleLocationChange}
        placeholder="Kyiv, Ukraine"
        label="Location"
      />

      <div className="flex flex-col gap-8">
        <h3 className="text-text-secondary text-base leading-6 font-medium">
          Filters
        </h3>

        <FiltersSection
          title="Vehicle equipment"
          filters={equipmentOptions}
          checkIsActive={(equipment) =>
            selectedEquipment[equipment as EquipmentId]
          }
          onFeatureToggle={(id) => toggleEquipment(id as EquipmentId)}
        />

        <FiltersSection
          title="Vehicle type"
          filters={vehicleTypes}
          checkIsActive={(type) => selectedVehicleType === type}
          onFeatureToggle={(id) => setType(id as VehicleTypeId)}
        />
      </div>

      <Button onClick={handleSearch} className="self-start">
        Search
      </Button>
    </div>
  );
}
