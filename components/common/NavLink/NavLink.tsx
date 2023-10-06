'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.css';
import { HTMLAttributes } from 'react';

export default function NavLink({
  children,
  href,
  ...args
}: {
  children: React.ReactNode;
  href: string;
} & HTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.icon} ${pathname === href ? styles.active : ''}`}
      {...args}>
      {children}
    </Link>
  );
}
