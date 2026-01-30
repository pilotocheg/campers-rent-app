'use client';

import { useEffect } from 'react';

import { useCampers } from '@/hooks/selectors/use-campers';
import { useCampersLoading } from '@/hooks/selectors/use-campers-loading';
import { useAllItemsLoaded } from '@/hooks/selectors/use-all-items-loaded';
import { useCampersActions } from '@/hooks/actions/use-campers-actions';
import Loader from '@/components/common/loader';
import EmptyMessage from '@/components/common/empty-message';
import Button from '@/components/common/button';

import CamperListItem from './camper-list-item';

export default function CamperList() {
  const campers = useCampers();
  const loading = useCampersLoading();
  const allItemsLoaded = useAllItemsLoaded();

  const { getCampers, resetCampers } = useCampersActions();

  useEffect(() => {
    getCampers(true);

    return resetCampers;
  }, [getCampers, resetCampers]);

  const handleLoadMore = () => {
    getCampers(false);
  };

  if (loading && !campers?.length) {
    return <Loader />;
  }

  if (!campers?.length && !loading) {
    return <EmptyMessage message="No campers found." />;
  }

  return (
    <div className="flex-1">
      <ul className="flex w-full flex-col gap-8">
        {campers.map((camper) => (
          <CamperListItem key={camper.id} camper={camper} />
        ))}
      </ul>

      {campers.length > 0 && !allItemsLoaded && (
        <div className="mt-10 flex justify-center">
          {loading ? (
            <Loader />
          ) : (
            <Button
              appearance="outline"
              className="min-w-[145px]"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
