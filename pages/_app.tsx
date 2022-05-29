import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import PageWithLayoutType from '../types/pageWithLayouts';
import '../styles/globals.css';
import Script from 'next/script';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
