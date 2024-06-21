'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const AppHeader = () => {
  const currentPath = usePathname();
  console.log('CURRENT PATH', currentPath);
  return <nav>{currentPath}</nav>;
};

export default AppHeader;
