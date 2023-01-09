import React from 'react';
import Head from 'next/head';

const HeadPage = ({ title, content = 'Aulen Propiedades' }) => {
  return (
    <Head>
      <title>{`Aulen | ${title ? title : '...'}`}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadPage;
