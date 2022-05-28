import { MainLayout } from '../../components/layouts/MainLayout';
import { courseData } from '../../data/courseData';

const Lessons = () => {
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
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm md:w-1/2 xl:w-1/3"
          placeholder="What are you looking to learn? Enter a search term..."
        />
      </div>

      <div className="mx-2 mb-8 flex flex-wrap lg:px-8">
        {courseData.map((chapter: any) => {
          return (
            <div key={chapter.number} className="mb-4 w-full px-2 md:w-1/3">
              <h3 className="mb-4 text-center text-2xl font-semibold">
                Chapter {chapter.number}
              </h3>
              {chapter.lessons.map((lesson: any) => {
                return (
                  <div
                    key={lesson.number}
                    className="text-grey-dark mb-4 flex h-12 items-center justify-center border text-sm"
                  >
                    <p>{lesson.title}</p>
                  </div>
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
