import { SubscribeForm } from '../common/SubscribeForm';

export default function HeroSection() {
  return (
    <div className="relative pb-8 sm:pb-16 lg:pb-24">
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
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              allowFullScreen={true}
              title="Promo Video"
              className="aspect-video mt-8 mb-8 w-full items-center rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
