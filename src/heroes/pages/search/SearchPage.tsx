import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './iu/SearchControls';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search Characters"
        description="Find your favorite superheroes"
      />
      <CustomBreadcrumb currentPage="Search" breadcrumbs={[]} />
      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
