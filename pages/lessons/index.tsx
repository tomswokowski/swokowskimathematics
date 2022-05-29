import { MainLayout } from '../../components/layouts/MainLayout';
import { courseData } from '../../data/courseData';
import { useState } from 'react';
import Link from 'next/link';

const Lessons = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredLessons, setFilteredLessons] = useState(courseData);
  const [chapters, setChapters] = useState<string[]>([
    ...new Set(courseData.map((lesson) => lesson.chapter)),
  ]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);

    if (searchInput !== '') {
      const filteredData = courseData.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredLessons(filteredData);
    } else {
      setFilteredLessons(courseData);
    }

    setChapters([...new Set(filteredLessons.map((lesson) => lesson.chapter))]);
  };

  return (
    <>
      <h1 className="mb-8 text-center text-3xl font-bold">
        Full Algebra Course Curriculum
      </h1>

      <div className="mb-20 flex justify-center">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 shadow-sm placeholder:text-center focus:border-red-600 focus:ring-red-600 sm:text-sm md:w-1/2 xl:w-1/3"
          placeholder="What are you looking to learn?"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>

      <div className="mx-2 mb-8 flex flex-wrap lg:px-8">
        {chapters.map((chapter: any, index) => {
          return (
            <div key={index} className="mb-4 w-full px-2 md:w-1/2 xl:w-1/3">
              <h3 className="mb-4 text-center text-2xl font-semibold">
                Chapter {chapter}
              </h3>
              {filteredLessons
                .filter((lesson) => lesson.chapter === chapter)
                .map((lesson: any) => {
                  return (
                    <Link key={lesson.number} href={`/lessons/${lesson.slug}`}>
                      <a>
                        <div
                          key={lesson.number}
                          className="text-grey-dark border-1 mb-4 flex h-12 items-center justify-center text-sm font-semibold shadow-md hover:bg-red-600 hover:text-white"
                        >
                          <p>{lesson.title}</p>
                        </div>
                      </a>
                    </Link>
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};

Lessons.layout = MainLayout;

export default Lessons;
