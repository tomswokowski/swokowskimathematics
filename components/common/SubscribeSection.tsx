export default function SubscribeSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:flex lg:items-center lg:py-32 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get the free practice workbook
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            In order to truly learn the material, you must practice. By entering
            your email address, you will receive a 323 page downloadable PDF
            file that contains over 1,700 practice problems that accompany each
            lesson in the course. Students learn best when they go slowly and
            complete the practice problems after each lesson.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-5 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Get Free Workbook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
