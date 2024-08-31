'use client';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { counterState } from '../recoil/atoms';

function Navbar() {
  const count = useRecoilValue(counterState);
  
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
      <p>Counter: {count}</p>
    </nav>
  );
}

export default Navbar;
