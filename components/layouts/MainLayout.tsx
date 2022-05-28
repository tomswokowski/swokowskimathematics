import type { LayoutProps } from '../../types/pageWithLayouts';
import { Footer } from '../common/Footer';
import { NavBar } from '../common/NavBar';
import { SEO } from '../common/SEO';

export const MainLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex h-screen flex-col justify-between">
        <div>
          <NavBar />
          <main className="px-4 py-6">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
