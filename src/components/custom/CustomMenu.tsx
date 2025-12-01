import { Link, useLocation } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';

const pages = [
  { name: 'Home', href: '/' },
  // { name: 'Heroes', href: '/heroes' },
  { name: 'Search', href: '/search' },
];

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pages.map((page) => (
          <NavigationMenuItem key={page.name}>
            <NavigationMenuLink
              asChild
              className={cn(
                isActive(page.href) && 'bg-slate-200',
                'rounded-md p-2'
              )}
            >
              <Link to={page.href} key={page.name}>
                {page.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
