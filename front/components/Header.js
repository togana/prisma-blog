import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <Link prefetch href="/">
      <a>
        Home
      </a>
    </Link>
  </header>
);

export default Header;
