import Container from '@/components/common/container';
import Button from '@/components/common/button';
import { Routes } from '@/lib/constants/routes';

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] w-full items-center bg-[url(/main-bg.jpg)] bg-cover bg-center">
      <Container className="flex-1">
        <div className="flex flex-col items-start text-white">
          <h1 className="text-5xl leading-8 font-semibold">
            Campers of your dreams
          </h1>
          <p className="mt-4 text-2xl leading-8 font-semibold">
            You can find everything you want in our catalog
          </p>
          <Button className="mt-10 min-w-[173px]" linkTo={Routes.CATALOG}>
            View Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
