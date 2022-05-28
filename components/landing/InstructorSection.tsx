import { ExternalLinkIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function InstructorSection() {
  return (
    <div className="relative bg-gray-50">
      <div className="h-56 py-12 text-center sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 lg:py-16">
        <Image
          src="/john.png"
          alt="John Swokowski"
          width={175}
          height={175}
          className="mx-auto mb-2 rounded-3xl md:mr-4 md:mb-0"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet your instructor
          </p>
          <p className="mt-3 text-lg text-gray-600">
            Hello, my name is John Swokowski. I have taught High School Algebra
            for nearly 40 years. The most rewarding experiences I have
            encountered have been working with students who did not like Math
            and thought they could not learn it. I love teaching and am looking
            forward to reaching many more students through Swokowski
            Mathematics.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://www.udemy.com/course/theultimateguidetounderstandingalgebra/?couponCode=ALGEBRA2022"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-500"
              >
                View all reviews
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
