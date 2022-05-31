const faqs = [
  {
    id: 1,
    question: 'Who should take this course?',
    answer:
      "This course is for anyone who has a desire to or needs to learn Algebra. Students should have at least a 6th grade education. This course serves as a good supplement to a student already in an Algebra class. It's been especially effective with students who have struggled with other Algebra learning materials. The course is highly rated on Udemy and is constantly being updated with additional content.",
  },
  {
    id: 2,
    question: 'How is the course structured?',
    answer:
      'This is a video course where each lecture covers one topic. Most videos are short and only about 3 to 5 minutes in length. This is by design with the intention of helping the students focus better. The videos are interactive and students will be invited to pause the video and answer questions to check their understanding of the topic. After the video, students are encouraged to complete the homework problems presented after each lesson. They are also provided solutions so they can check their answers.',
  },
  {
    id: 3,
    question: 'Who is the instructor?',
    answer:
      "My name is John Swokowski and I am the instructor of the course. I've been a high school math teacher in the city of Milwaukee, Wisconsin for nearly 40 years. I've taught thousands of actual students in person and I'm deeply familiar with the parts of Algebra that many students find confusing or difficult to learn. This level of empathy for the struggling and frustrated student is what sets me apart from many other online Algebra course creators who have never even set foot in an actual classroom. I'm still teaching in Milwaukee and I created this course to help more students learn Algebra.",
  },
  {
    id: 4,
    question: 'How much is the course?',
    answer:
      'The price of the course will typically vary between $10-$15. It is hosted on Udemy so the actual price will flucuate. Clicking on any of the links on this website will automatically apply a coupon for you so that you be guaranteed to receive the lowest price possible. If you would like to get a feel for the course before buying it, it is recommended that you watch the free videos available. Futhermore, I offer a free Algebra Bootcamp also on Udemy where students can get a feel for my teaching style to see if it is right for them. The Bootcamp only covers the very basics of Algebra and should take students only an hour or two to complete.',
  },
  {
    id: 5,
    question:
      "What's the difference between the YouTube course and Udemy course?",
    answer:
      "I've made the videos available on YouTube for free in order to make learning accessible to all students across the world. They are same videos you will find in the course. However, the full course includes practice worksheets and answers after each lesson. Additionally, you will have a direct line to myself in case you need support or assitance with something in the course.",
  },
  {
    id: 6,
    question: 'How do I get help if needed?',
    answer:
      "I have a passion for helping students who have a desire to learn. If you a question about anything, you are encouraged to send me a private message in the course dashboard on Udemy. I will do my best to respond within 24 hours. You may also check the student discussion board under each lesson. It's possible that another student has had the same question as you and it is already answered by either myself or another student. I'm always here to help.",
  },
  {
    id: 7,
    question: 'What is the refund policy?',
    answer:
      'Udemy offers a 30-day money back guarantee with no questions asked. If you are unhappy with the course for any reason, you can request a refund through Udemy.',
  },
];

export default function FAQSection() {
  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Frequently asked questions
        </h2>
        <div className='mt-8'>
          <dl className='divide-y divide-gray-200'>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className='pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8'
              >
                <dt className='text-base font-medium text-gray-900 md:col-span-5'>
                  {faq.question}
                </dt>
                <dd className='mt-2 md:col-span-7 md:mt-0'>
                  <p className='text-base text-gray-500'>{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
