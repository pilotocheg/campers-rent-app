import CamperList from '@/components/camper/camper-list';
import FilterSidebar from '@/components/filter-sidebar';
import Container from '@/components/common/container';

export default function CatalogPage() {
  return (
    <Container>
      <div className="grid grid-cols-[360px_1fr] gap-16 py-12">
        <FilterSidebar />
        <CamperList />
      </div>
    </Container>
  );
}
