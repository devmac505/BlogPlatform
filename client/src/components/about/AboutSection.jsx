import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import SectionHeader from './SectionHeader';
import ProfileStats from './ProfileStats';
import ProfileFeatures from './ProfileFeatures';
import SocialLinks from './SocialLinks';
import ProfileImage from './ProfileImage';
import InterestsGrid from './InterestsGrid';

import { aboutData } from '../../data/aboutData';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        <SectionHeader subtitle={aboutData.subtitle} title={aboutData.title} />

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-name">{aboutData.name}</h3>
            <h4 className="about-role">{aboutData.role}</h4>

            <p className="about-intro">{aboutData.intro}</p>

            {aboutData.description.map((paragraph, index) => (
              <p className="about-description" key={index}>
                {paragraph}
              </p>
            ))}

            <ProfileStats stats={aboutData.stats} />
            <ProfileFeatures features={aboutData.features} />
            <SocialLinks links={aboutData.social} />

            <Link to="/about" className="about-cta">
              View My Full Profile <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
            </Link>
          </div>

          <div className="about-image">
            <ProfileImage name="Mac" />
            <InterestsGrid interests={aboutData.interests} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
