import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './iu/SearchControls';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search Characters"
        description="Find your favorite superheroes"
      />
      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
