import Head from "next/head";
import React from "react";

interface HeadMetaProps {
  title: string;
  description?: string;
}

const HeadMeta = ({ title, description }: HeadMetaProps) => {
  return (
    <>
      <Head>
        <title>{`${title}-GlobalNomad`}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
};

export default HeadMeta;
