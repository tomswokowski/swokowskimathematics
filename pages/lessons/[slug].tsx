import NewsletterSection from '../../components/common/SubscribeSection';
import { MainLayout } from '../../components/layouts/MainLayout';
import { lessons } from '../../data/lessons';

import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = lessons.map((lesson) => ({
    params: { slug: lesson.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lesson = lessons.find((lesson) => lesson.slug === params!.slug);
  return { props: { lesson } };
};

const LessonPage = ({ lesson }: any) => {
  return (
    <>
      <div className="mx-auto max-w-5xl sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="relative">
          <h1>{lesson.title}</h1>
          <video
            src={lesson.youtubeUrl}
            className="js-video mx-auto mt-4 rounded bg-amber-100"
            poster="https://via.placeholder.com/1920x1080/eee"
          />
          <div className="flex justify-between">
            <button>Previous Lesson</button>
            <button>Next Lesson</button>
          </div>
          <h3>Lesson Description:</h3>
          <p>{lesson.description}</p>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

LessonPage.layout = MainLayout;

export default LessonPage;
