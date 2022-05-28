import SubscribeSection from '../components/common/SubscribeSection';
import { MainLayout } from '../components/layouts/MainLayout';

const Resources = () => {
  return (
    <>
      <h1 className="mb-8 text-center text-6xl font-bold">Resources</h1>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold">Video Content</h2>
          <p className="text-gray-500">
            Videos are available on YouTube or Udemy.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Practice & Answer Workbook
          </h2>
          <p className="text-gray-500">
            You can download the practice and answer workbook.
          </p>
        </div>
      </div>

      <SubscribeSection />
    </>
  );
};

Resources.layout = MainLayout;

export default Resources;
