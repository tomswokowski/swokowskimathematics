import { MainLayout } from '../components/layouts/MainLayout';
import Error from 'next/error';

function Page({ statusCode }: any) {
  return <Error statusCode={statusCode}></Error>;
}

Page.layout = MainLayout;

Page.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Page;
