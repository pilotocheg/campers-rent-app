import Container from '@/components/common/container';
import Button from '@/components/common/button';
import { Routes } from '@/lib/constants/routes';

export default function NotFoundPage() {
  return (
    <Container>
      <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-6">
        <h1 className="text-text text-6xl font-bold">404</h1>
        <p className="text-text-secondary text-xl">Page not found</p>
        <Button linkTo={Routes.HOME}>Go Home</Button>
      </div>
    </Container>
  );
}
