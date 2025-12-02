import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './iu/SearchControls';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';
import { useQuery } from '@tanstack/react-query';
import { SearchHeroesAction } from '@/heroes/actions/searchHeroes.action';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useSearchParams } from 'react-router';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ['heroes-search', { name: query, strength: strength }],
    queryFn: async () =>
      SearchHeroesAction({ name: query, strength: strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <>
      <CustomJumbotron
        title="Search Characters"
        description="Find your favorite superheroes"
      />
      <CustomBreadcrumb currentPage="Search" breadcrumbs={[]} />
      <HeroStats />
      <SearchControls />
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
