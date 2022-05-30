import { SubscribeForm } from './SubscribeForm';

export default function SubscribeSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:flex lg:items-center lg:py-32 lg:px-8">
        <div className="mr-10 mb-4 w-full xl:w-1/2">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Get the free practice workbook
          </h2>
          <p className="mt-3 max-w-3xl text-base text-gray-500">
            In order to truly learn the material, you must practice. By entering
            your email address, you will receive a 323 page downloadable PDF
            file that contains over 1,700 practice problems that accompany each
            lesson in the course. Students learn best when they go slowly and
            complete the practice problems after each lesson.
          </p>
        </div>
        <div className="w-full xl:w-1/2">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
