import type { LayoutProps } from '../../types/pageWithLayouts';
import { Footer } from '../common/Footer';
import { NavBar } from '../common/NavBar';

export const MainLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <div className='flex h-screen flex-col justify-between'>
        <div className='relative pt-6'>
          <NavBar />
          <main className='px-4 py-6'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
