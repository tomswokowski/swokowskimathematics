import {
  VideoCameraIcon,
  PencilIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Watch the videos',
    description:
      'Each lecture includes a short (4-6 minute) interactive video covering one topic of Algebra at a time. The videos are carefully designed to maximize student focus and knowledge retention.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Complete the practice problems',
    description:
      'Included with each lesson is a set of practice problems that students are welcome to complete. These problems correlate directly with the material just covered in the corresponding video lecture.',
    icon: PencilIcon,
  },
  {
    name: 'Master the material',
    description:
      'Upon completion of this course, a student will feel confident with Algebra. They will feel comfortable passing any test and will be able to acheive a high score on standarized tests such as the ACT or SAT.',
    icon: AcademicCapIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-white py-12 pb-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
