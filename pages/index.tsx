import { MainLayout } from '../components/layouts/MainLayout';
import HeroSection from '../components/landing/HeroSection';
import FeatureSection from '../components/landing/FeatureSection';
import CourseContent from '../components/landing/CourseContent';
import CTASection from '../components/landing/CTASection';
import TestimonialSection from '../components/landing/TestimonialSection';
import InstructorSection from '../components/landing/InstructorSection';
import FAQSection from '../components/landing/FAQSection';
import { SEO } from '../components/common/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title='Home'
        description='A complete course that covers the essential topics of Algebra. The material taught in this course will help any student be more successful in their Algebra class and achieve a high score on standardized tests such as the ACT or SAT.'
        siteUrl=''
      />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <InstructorSection />
      <CourseContent />
      <FAQSection />
      <CTASection />
    </>
  );
};

Home.layout = MainLayout;

export default Home;
