import SubscribeSection from '../components/common/SubscribeSection';
import { MainLayout } from '../components/layouts/MainLayout';

const Resources = () => {
  return (
    <>
      <h1 className="mb-16 text-center text-6xl font-bold">Resources</h1>
      <div className="mx-2 mb-8 flex flex-wrap lg:px-8">
        <div className="w-full px-4 sm:px-6 md:w-1/2 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-3xl font-semibold">
              Video Content
            </h2>
            <p className="text-gray-500">
              There are 323 videos available in the course totaling over 21
              hours of content. All videos are available for free on{' '}
              <a
                href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 underline"
              >
                YouTube
              </a>{' '}
              or as part of the{' '}
              <a
                href={process.env.NEXT_PUBLIC_UDEMY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 underline"
              >
                Udemy
              </a>{' '}
              course. The videos are exactly the same but you with the purchase
              of the Udemy course, all additional course resources (practice
              worksheets with answers, downloadable lesson quizzes, unit reviews
              and tests) are included. You will be able to receive support
              through your learning via direct message with the instructor.
            </p>
          </div>
        </div>
        <div className="w-full px-4 sm:px-6 md:w-1/2 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-3xl font-semibold">
              Practice & Answer Workbook
            </h2>
            <p className="text-gray-500">
              You can download the practice exercises that go along with the
              course by entering your email below for free. There is a practice
              worksheet that accompanies each lecture and there are over 1,700
              problems included. You can purchase the answer key for these
              practice exercises on{' '}
              <a
                href={process.env.NEXT_PUBLIC_GUMROAD_URL}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 underline"
              >
                Gumroad
              </a>{' '}
              for $9.99. The answer key is included with the course if you
              subscribe and take the course on{' '}
              <a
                href={process.env.NEXT_PUBLIC_UDEMY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 underline"
              >
                Udemy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <SubscribeSection />
    </>
  );
};

Resources.layout = MainLayout;

export default Resources;
