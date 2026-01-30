'use client';

import { useEffect, useState, use } from 'react';

import { useCurrentCamper } from '@/hooks/selectors/use-current-camper';
import { useCampersLoading } from '@/hooks/selectors/use-campers-loading';
import { useCampersActions } from '@/hooks/actions/use-campers-actions';
import Container from '@/components/common/container';
import CamperHeader from '@/components/camper/camper-header';
import FeaturesList from '@/components/camper/features-list';
import DetailsList from '@/components/camper/details-list';
import Loader from '@/components/common/loader';
import EmptyMessage from '@/components/common/empty-message';
import CamperBookingForm from '@/components/camper/camper-booking-form';
import Tabs from '@/components/common/tabs';
import CamperGallery from '@/components/camper/camper-gallery';
import CamperReviews from '@/components/camper/reviews/camper-reviews';

const tabs = ['features', 'reviews'];

interface CamperDetailsPageProps {
  params: Promise<{ camperId: string }>;
}

export default function CamperDetailsPage({ params }: CamperDetailsPageProps) {
  const { camperId } = use(params);
  const { getCamperDetails } = useCampersActions();
  const camper = useCurrentCamper();
  const loading = useCampersLoading();
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    if (camperId) {
      getCamperDetails(camperId);
    }
  }, [getCamperDetails, camperId]);

  if (loading) {
    return <Loader />;
  }

  if (!camper) {
    return <EmptyMessage message="Camper not found." />;
  }

  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col gap-7">
          <CamperHeader camper={camper} parent="details" />

          <CamperGallery camper={camper} />

          <p className="text-text-secondary">{camper.description}</p>
        </div>

        <Tabs
          className="mt-[60px]"
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="mt-11 flex min-h-[588px] items-stretch gap-10">
          <div className="flex-1">
            {activeTab === 'features' && (
              <div className="bg-background-light flex h-full flex-col justify-between gap-8 rounded-[10px] px-[52px] py-11">
                <FeaturesList camper={camper} parent="details" />
                <DetailsList camper={camper} />
              </div>
            )}

            {activeTab === 'reviews' && <CamperReviews camper={camper} />}
          </div>

          <div className="flex-1">
            <CamperBookingForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
