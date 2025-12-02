import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { Hero } from '../types/hero.interface';

interface FavoriteHeroContext {
  favorites: Hero[];
  favoriteCount: number;
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext<FavoriteHeroContext>(
  {} as FavoriteHeroContext
);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favoriteHeroes');
  // todo: validate Zod schema
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage()
  );

  const toggleFavorite = (hero: Hero) => {
    const heroExists = favorites.find((h) => h.id === hero.id);

    if (heroExists) {
      setFavorites(favorites.filter((h) => h.id !== hero.id));
      return;
    } else {
      setFavorites((prev) => [...prev, hero]);
    }
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem('favoriteHeroes', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
