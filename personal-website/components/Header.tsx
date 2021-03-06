import { FC } from 'react';
import Link from 'next/link';
import Github from './icons/github';
import Twitter from './icons/Twitter';
import Email from './icons/Email';

interface IHeader {}

const links = [
  {
    id: 'about',
    href: '/about',
    text: 'About',
  },
  {
    id: 'packages',
    href: '/packages',
    text: 'Open source',
  },
  {
    id: 'blog',
    href: '/blog',
    text: 'Blog',
  },
];

const Header: FC<IHeader> = () => (
  <header className="md:gap-8 grid-rows-3-60px md:grid-rows-1 relative z-50 grid content-center grid-cols-7 gap-2 p-4 pt-8">
    <h1 className="sm:justify-start sm:col-end-6 md:col-end-3 flex flex-row justify-center w-full col-start-1 col-end-8 row-start-1 row-end-2 space-x-2 text-2xl">
      <Link href="/">
        <a>
          <span className="font-serif font-bold">Mohammed Manssour</span>
        </a>
      </Link>
    </h1>
    <nav className="md:col-start-3 md:col-end-6 md:row-start-1 flex flex-row items-center justify-between col-start-1 col-end-8 row-start-2 row-end-2 leading-loose">
      {links.map(link => (
        <Link key={link.id} href={link.href}>
          <a className="hover:text-opacity-100 w-full pt-2 text-lg text-center text-white text-opacity-75 transition-colors duration-300 ease-in-out">
            {link.text}
          </a>
        </Link>
      ))}
    </nav>
    <nav className="sm:justify-end sm:col-start-6 flex items-center justify-center col-start-1 col-end-8 space-x-10">
      <a
        href="https://github.com/mohammedmanssour"
        className="flex-shrink-0 w-8 h-8 pt-1">
        <Github />
      </a>
      <a
        href="https://twitter.com/manssourmhd"
        className="flex-shrink-0 w-8 h-8 pt-1">
        <Twitter />
      </a>
      <a
        href="mailto:hello@mohammedmanssour.me"
        className="flex-shrink-0 w-8 h-8 pt-1">
        <Email />
      </a>
    </nav>
  </header>
);

export default Header;
