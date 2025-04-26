import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import API_URL from '../../config/api';
import './FeaturedBlogs.css';

const FeaturedBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs?limit=6`);
        const data = await response.json();

        if (data.success) {
          setFeaturedBlogs(data.data);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        setError('Error connecting to the server');
        console.error('Error fetching featured blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  // Generate a random color for blog cards
  const getRandomColor = () => {
    const colors = ['#4a6cf7', '#f97316', '#eab308', '#14b8a6', '#8b5cf6', '#ec4899'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section className="featured-blogs">
      <div className="container">
        <div className="section-header">
          <h2>Featured Blogs</h2>
          <p>Explore the latest articles and insights</p>
        </div>

        {loading ? (
          <div className="loading">Loading featured blogs...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : featuredBlogs.length === 0 ? (
          <div className="no-blogs">
            <p>No blog posts found. Check back soon for new content!</p>
          </div>
        ) : (
          <>
            <div className="blogs-grid">
              {featuredBlogs.map(blog => (
                <div className="blog-card" key={blog._id}>
                  <div className="blog-image" style={{ backgroundColor: getRandomColor() }}>
                    {blog.image && <img src={blog.image} alt={blog.title} />}
                    <div className="blog-category">
                      <FontAwesomeIcon icon={faTag} className="category-icon" />
                      {blog.category || 'Uncategorized'}
                    </div>
                    <div className="blog-overlay"></div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <div className="blog-date">
                        <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      {blog.readTime && <div className="blog-read-time">{blog.readTime}</div>}
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">
                      {blog.excerpt || (blog.content && blog.content.substring(0, 120) + '...')}
                    </p>
                    <Link to={`/blog/${blog._id}`} className="read-more">
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
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
