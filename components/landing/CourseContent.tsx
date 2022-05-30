import { CheckIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const features = [
  {
    name: 'Solving equations & inequalities',
  },
  {
    name: 'Linear equations, functions, & graphs',
  },
  {
    name: 'Sequences',
  },
  {
    name: 'Sequences',
  },
  {
    name: 'Functions',
  },
  {
    name: 'Absolute value equations, functions, & inequalities',
  },
  {
    name: 'Quadratic equations & functions',
  },
  {
    name: 'Polynomial expressions, equations, & functions',
  },
  {
    name: 'Exponential & logarithmic functions',
  },
  {
    name: 'Radical equations & functions',
  },
  {
    name: 'Rational expressions, equations, & functions',
  },
  {
    name: 'And much more...',
  },
];

export default function CourseContent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-20 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wide text-gray-400">
            The Ultimate Guide to Understanding Algebra
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            The Complete Course
          </p>
          <p className="mt-4 pb-8 text-lg text-gray-500">
            All topics typically taught in a standard Algebra course are covered
            in depth.
          </p>
          <div className="inline-flex rounded-md shadow">
            <Link href="/lessons">
              <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-500">
                View all lessons
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-sm font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
