import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import './FeaturedBlogs.css';

const FeaturedBlogs = () => {
  // Mock data for featured blogs
  const featuredBlogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component. This guide will walk you through the fundamentals.',
      color: '#4a6cf7',
      date: 'April 20, 2023',
      category: 'Web Development',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Power of CSS Grid',
      excerpt: 'Discover how CSS Grid can transform your layouts and make responsive design easier. Master grid templates and areas.',
      color: '#f97316',
      date: 'April 15, 2023',
      category: 'CSS',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      excerpt: 'Explore the modern features of JavaScript that make coding more efficient. Learn about arrow functions, destructuring, and more.',
      color: '#eab308',
      date: 'April 10, 2023',
      category: 'JavaScript',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Building a MERN Stack App',
      excerpt: 'Step-by-step guide to creating a full-stack application with MongoDB, Express, React, and Node.js. From setup to deployment.',
      color: '#14b8a6',
      date: 'April 5, 2023',
      category: 'Full Stack',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Responsive Design Principles',
      excerpt: 'Learn the key principles for creating websites that look great on any device. Mobile-first approach and best practices.',
      color: '#8b5cf6',
      date: 'April 1, 2023',
      category: 'UI/UX',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Introduction to TypeScript',
      excerpt: 'Why TypeScript is becoming essential for modern web development projects. Explore static typing and interfaces.',
      color: '#ec4899',
      date: 'March 25, 2023',
      category: 'TypeScript',
      readTime: '7 min read'
    }
  ];

  return (
    <section className="featured-blogs">
      <div className="container">
        <div className="section-header">
          <h2>Featured Blogs</h2>
          <p>Explore the latest articles and insights</p>
        </div>

        <div className="blogs-grid">
          {featuredBlogs.map(blog => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image" style={{ backgroundColor: blog.color }}>
                <div className="blog-category">
                  <FontAwesomeIcon icon={faTag} className="category-icon" />
                  {blog.category}
                </div>
                <div className="blog-overlay"></div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-date">
                    <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
                    {blog.date}
                  </div>
                  <div className="blog-read-time">{blog.readTime}</div>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="read-more">
                  Read More <FontAwesomeIcon icon={faArrowRight} className="read-more-icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <Link to="/blogs" className="btn btn-outline">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
