import { useMemo } from 'react';
import { useSearchParams } from 'react-router';

export const useHomePageParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setSearchParams((prev) => {
      prev.set('tab', tab);
      return prev;
    });
  };

  const handleCategoryChange = (category: string) => {
    setSearchParams((prev) => {
      prev.set('category', category);
      return prev;
    });
  };

  return {
    category,
    page,
    limit,
    tab: selectedTab,
    handleTabChange,
    handleCategoryChange,
    setSearchParams,
  };
};
