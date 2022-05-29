import { MainLayout } from '../components/layouts/MainLayout';
import Link from 'next/link';

export default function InternalServerError() {
  return (
    <>
      <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-red-600 sm:text-5xl">
              500
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Internal Server Error
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  We are sorry, an error has occurred processing your request.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/">
                  <a className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Go back home
                  </a>
                </Link>
                <Link href="/lessons">
                  <a className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    View Course Lessons
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

InternalServerError.layout = MainLayout;
