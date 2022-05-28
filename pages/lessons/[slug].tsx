import NewsletterSection from '../../components/common/SubscribeSection';
import { MainLayout } from '../../components/layouts/MainLayout';

const LessonPage = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="relative">
          <h1>Lesson Title</h1>
          <video
            src="https://www.youtube.com/watch?v=ScMzIvxBSi4"
            className="js-video mx-auto mt-4 rounded bg-amber-100"
            poster="https://via.placeholder.com/1920x1080/eee"
          />
          <div className="flex justify-between">
            <button>Previous Lesson</button>
            <button>Next Lesson</button>
          </div>
          <h3>Lesson Description</h3>
          <p>Description Goes Here...</p>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

LessonPage.layout = MainLayout;

export default LessonPage;
