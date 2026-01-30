'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import toast from 'react-hot-toast';

import Container from './common/container';
import { useAuth } from '@/hooks/use-auth';
import { Routes } from '@/lib/constants/routes';

export default function Navigation() {
  const pathname = usePathname();
  const { user, loading, signOut } = useAuth();

  const isActive = (path: Routes) => {
    if (path === Routes.HOME) return pathname === Routes.HOME;
    return pathname.startsWith(path);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch {
      toast.error('Failed to sign out');
    }
  };

  return (
    <header className="border-border-light bg-background-light sticky top-0 right-0 left-0 z-50 w-full border-b shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
      <Container>
        <nav className="relative flex h-[72px] items-center justify-center">
          <div className="absolute left-0 flex items-center">
            <Link
              href={Routes.HOME}
              className="text-text text-xl leading-none font-black"
            >
              Travel<span className="text-text-secondary">Trucks</span>
            </Link>
          </div>

          <div className="flex gap-8">
            <Link
              href={Routes.HOME}
              className={clsx(
                'hover:text-primary font-medium transition-colors duration-200',
                isActive(Routes.HOME) && pathname === Routes.HOME
                  ? 'text-primary font-semibold'
                  : 'text-text',
              )}
            >
              Home
            </Link>
            <Link
              href={Routes.CATALOG}
              className={clsx(
                'hover:text-primary font-medium transition-colors duration-200',
                isActive(Routes.CATALOG)
                  ? 'text-primary font-semibold'
                  : 'text-text',
              )}
            >
              Catalog
            </Link>
          </div>

          <div className="absolute right-0 flex items-center gap-4">
            {loading ? (
              <div className="bg-border-light h-8 w-20 animate-pulse rounded-full" />
            ) : user ? (
              <>
                <span className="text-text-secondary hidden text-sm sm:block">
                  {user.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-text hover:text-primary cursor-pointer font-medium transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href={Routes.LOGIN}
                  className={clsx(
                    'hover:text-primary font-medium transition-colors duration-200',
                    isActive(Routes.LOGIN)
                      ? 'text-primary font-semibold'
                      : 'text-text',
                  )}
                >
                  Sign In
                </Link>
                <Link
                  href={Routes.REGISTER}
                  className="bg-primary hover:bg-primary-hover rounded-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
