import { Filter, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';
import { useHeroSummary } from '@/heroes/hooks/useHeroSummary';
import { usePaginatedHeroes } from '@/heroes/hooks/usePaginatedHeroes';
import { useHomePageParams } from '@/heroes/hooks/useHomePageParams';

export const HomePage = () => {
  const {
    category,
    page,
    limit,
    tab,
    handleTabChange,
    handleCategoryChange,
    setSearchParams,
  } = useHomePageParams();

  const { data: heroesResponse } = usePaginatedHeroes(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  return (
    <>
      <CustomJumbotron
        title="Superhero Universe"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      <CustomBreadcrumb currentPage="Heroes" />

      <HeroStats />

      {/* Tabs */}
      <Tabs value={tab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() => {
              handleTabChange('all');
              handleCategoryChange('all');
              setSearchParams((prev) => {
                prev.set('page', '1');
                return prev;
              });
            }}
          >
            All Characters ({summary?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => {
              handleTabChange('favorites');
              handleCategoryChange('all');
            }}
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() => {
              handleTabChange('heroes');
              handleCategoryChange('hero');
            }}
          >
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => {
              handleTabChange('villains');
              handleCategoryChange('villain');
            }}
          >
            Villains ({summary?.villainCount})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">Favorites (3)</TabsContent>
        <TabsContent value="heroes">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Results info */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <p className="text-gray-600">Showing 6 of 16 characters</p>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Filter className="h-3 w-3" />
            Filtered
          </Badge>
        </div>
      </div>

      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  );
};
