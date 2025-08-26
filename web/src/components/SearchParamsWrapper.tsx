'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

interface SearchParamsWrapperProps {
  children: (searchParams: { [key: string]: string | undefined }) => ReactNode;
}

export function SearchParamsWrapper({ children }: SearchParamsWrapperProps) {
  const searchParams = useSearchParams();
  
  const params: { [key: string]: string | undefined } = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return <>{children(params)}</>;
}

