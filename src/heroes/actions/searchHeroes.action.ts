import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/hero.interface';

interface Options {
  name?: string;
  team?: string;
  universe?: string;
  category?: string;
  status?: string;
  strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const SearchHeroesAction = async (options: Options) => {
  const { name, team, universe, category, status, strength } = options;

  if (!name && !team && !universe && !category && !status && !strength) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>('/search', {
    params: {
      name,
      team,
      universe,
      category,
      status,
      strength,
    },
  });

  return data.map((hero) => {
    return {
      ...hero,
      image: `${BASE_URL}/images/${hero.image}`,
    };
  });
};
