import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-2xl text-red-600">
            Check out the course or view the curriculum
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.udemy.com/course/theultimateguidetounderstandingalgebra/?couponCode=ALGEBRA2022"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-500"
            >
              View Course
              <ExternalLinkIcon
                className="-mr-1 ml-3 h-5 w-5 text-white"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/lessons">
              <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-red-600 hover:text-white">
                View Lessons
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
