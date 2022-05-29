import { SubscribeForm } from '../common/SubscribeForm';

export default function HeroSection() {
  return (
    <div className="relative pt-6 pb-8 sm:pb-16 lg:pb-24">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-8 lg:mt-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                <span className="block">Become an</span>
                <span className="block">Algebra Expert</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Learn everything you need to know in order to ace your Algebra
              class in this comprehensive course. View all 323 lessons for free
              on{' '}
              <a
                href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 underline"
              >
                YouTube
              </a>{' '}
              or enroll in the course on{' '}
              <a
                href={process.env.NEXT_PUBLIC_UDEMY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 underline"
              >
                Udemy
              </a>{' '}
              to get additional support and have all extra learning material
              included.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="mb-4 text-base font-medium text-gray-900">
                Enter your email and receive the course workbook free
              </p>
              <SubscribeForm />
              <p className="mt-3 text-sm text-gray-500">
                You will receive a 323 page downloadable PDF file that contains
                over 1,700 practice problems that accompany each lesson in the
                course.
              </p>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">
                  Watch the promo video to learn more
                </span>
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
                <span
                  className="absolute inset-0 flex h-full w-full items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-20 w-20 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
