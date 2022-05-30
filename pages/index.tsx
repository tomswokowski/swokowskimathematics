import { MainLayout } from '../components/layouts/MainLayout';
import HeroSection from '../components/landing/HeroSection';
import FeatureSection from '../components/landing/FeatureSection';
import CourseContent from '../components/landing/CourseContent';
import CTASection from '../components/landing/CTASection';
import TestimonialSection from '../components/landing/TestimonialSection';
import InstructorSection from '../components/landing/InstructorSection';
import FAQSection from '../components/landing/FAQSection';

const Home = () => {
  return (
    <>
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
