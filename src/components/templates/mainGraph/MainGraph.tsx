import { ReactNode } from 'react'
import Head from 'next/head';
import { NavBar } from '../../organisms';
import { Box, Container } from '@mui/material';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

export const MainGraph = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
          {children}
      </main>
    </>
  )
}
