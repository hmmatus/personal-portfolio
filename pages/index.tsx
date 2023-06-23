import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio for information purposes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
