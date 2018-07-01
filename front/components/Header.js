import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

// const Header = ({ router: { pathname } }) => (
const Header = () => (
  <header>
    <Link prefetch href="/">
      <a>
        Home
      </a>
    </Link>
  </header>
);

export default withRouter(Header);
