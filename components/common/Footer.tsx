import Image from 'next/image';
import Link from 'next/link';

const navigation = {
  links: [
    { name: 'Home', href: '/' },
    { name: 'Lessons', href: '/lessons' },
    { name: 'Resources', href: '/resources' },
  ],
  courses: [
    { name: 'The Ultimate Guide to Understanding Algebra', href: '#' },
    { name: 'Algebra Bootcamp', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/logo.png"
              alt="Swokowski Mathematics Logo"
              width={120}
              height={95}
            />
            <p className="text-base text-gray-500">
              The complete online resource to learn Algebra.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 xl:col-span-1 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Links
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-500 hover:text-gray-900 xl:text-xs">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Courses
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.courses.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900 xl:text-xs"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Swokowski Mathematics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
