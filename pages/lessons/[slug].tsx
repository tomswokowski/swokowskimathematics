import NewsletterSection from '../../components/common/SubscribeSection';
import { MainLayout } from '../../components/layouts/MainLayout';
import { lessons } from '../../data/lessons';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = lessons.map((lesson) => ({
    params: { slug: lesson.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lesson = lessons.find((lesson) => lesson.slug === params!.slug);

  const currentLessonIndex = parseInt(lesson!.number) - 1;

  const previousIndex = currentLessonIndex - 1;
  const nextIndex = currentLessonIndex + 1;

  const previousSlug = previousIndex >= 0 ? lessons[previousIndex].slug : null;
  const nextSlug = nextIndex < lessons.length ? lessons[nextIndex].slug : null;

  return { props: { lesson, previousSlug, nextSlug } };
};

const LessonPage = ({ lesson, previousSlug, nextSlug }: any) => {
  return (
    <>
      <div className="mx-auto max-w-5xl items-center sm:px-6 lg:flex lg:px-8">
        <div className="relative">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {lesson.title}
          </h1>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none">
            <video
              src={lesson.youtubeUrl}
              className="mx-auto mt-4 rounded bg-amber-100"
              poster="https://via.placeholder.com/1920x1080/eee"
            />
          </div>
          <div className="mt-4 mb-8 flex justify-between">
            {previousSlug && (
              <Link href={`/lessons/${previousSlug}`}>
                <a className="flex w-1/3 items-center justify-center rounded-md border border-transparent bg-red-600 py-2 px-1 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 md:w-1/5">
                  <ArrowLeftIcon
                    className="mr-1 h-5 w-5 text-white"
                    aria-hidden="true"
                  />{' '}
                  Previous
                </a>
              </Link>
            )}

            {nextSlug && (
              <Link href={`/lessons/${nextSlug}`}>
                <a className="flex w-1/3 items-center justify-center rounded-md border border-transparent bg-red-600 py-2 px-1 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 md:w-1/5">
                  Next{' '}
                  <ArrowRightIcon
                    className="ml-1 h-5 w-5 text-white"
                    aria-hidden="true"
                  />{' '}
                </a>
              </Link>
            )}
          </div>
          <h3 className="mb-4 mt-8 text-xl font-medium text-gray-900 md:col-span-5">
            Lesson Description:
          </h3>
          <p className="text-base text-gray-500">{lesson.description}</p>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

LessonPage.layout = MainLayout;

export default LessonPage;
