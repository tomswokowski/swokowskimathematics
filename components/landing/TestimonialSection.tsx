export default function TestimonialSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-gray-900 md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-300"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Amazing Instructor! I was well out of high school and completely
                forgot everything about Algebra, so I decided to take this
                course. The pace and process that you are taken through is
                perfect! If you start at lesson 1 and go through the program, I
                can promise you will learn everything and actually understand it
                all!
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div>
                  <div className="text-base font-medium text-gray-900">
                    Benny C.
                  </div>
                  <div className="text-base font-medium text-gray-400">
                    Former Student
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py-12 px-4 sm:px-6 md:py-16 md:pr-0 md:pl-10 lg:pl-16">
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-gray-900 md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-300"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Explanations are very clear and the repetition solidifies in the
                mind. Afterwards the practice exercises gives me hands-on
                experience. I&apos;m learning a lot of simple methods to solve
                equations; some I hadn&apos;t been exposed to in the past. This
                is an awesome course due to an excellent instructor.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div>
                  <div className="text-base font-medium text-gray-900">
                    Enya
                  </div>
                  <div className="text-base font-medium text-gray-400">
                    Former Student
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
