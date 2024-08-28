// pages/404.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import '@/app/globals.css';

export default function Custom404() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" passHref>
          <Button className="mt-6">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};
