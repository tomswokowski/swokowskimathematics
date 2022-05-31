import Head from 'next/head';
import { siteMetadata } from '../../data/siteMetadata';

interface SEOProps {
  title: string;
  description: string;
  siteUrl: string;
}

export const SEO = ({ title, description, siteUrl }: SEOProps) => {
  return (
    <Head>
      <title>
        {siteMetadata.title} | {title}
      </title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={description} />
      <meta property='og:url' content={siteMetadata.siteUrl + siteUrl} />
      <meta property='og:type' content='website' />
      <meta
        property='og:site_name'
        content={siteMetadata.title + ' | ' + title}
      />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={siteMetadata.title + ' | ' + title} />
      <meta
        property='og:image'
        content={siteMetadata.image}
        key='Swokowski Mathematics Logo'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteMetadata.title + ' | ' + title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={siteMetadata.image} />
      <link rel='canonical' href={siteMetadata.siteUrl + siteUrl} />
    </Head>
  );
};
