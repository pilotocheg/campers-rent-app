import Loader from '@/components/common/loader';

export default function PageLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader />
    </div>
  );
}
