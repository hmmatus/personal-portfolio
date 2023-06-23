import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Noto_Sans } from '@next/font/google';
import React from 'react';
import MainLayout from '@/src/components/modules/MainLayout/MainLayout';

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '100' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <style jsx global>{`
        html {
          font-family: ${notoSans.style.fontFamily};
        }
      `}</style>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </React.Fragment>
  );
}
