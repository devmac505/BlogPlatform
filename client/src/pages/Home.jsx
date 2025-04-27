import HeroSection from '../components/home/HeroSection';
import FeaturedBlogs from '../components/blog/FeaturedBlogs';
import AboutSection from '../components/about/AboutSection';

const Home = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <FeaturedBlogs />
      <AboutSection />
    </main>
  );
};

export default Home;
