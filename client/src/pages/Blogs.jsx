import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTag, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import API_URL from '../config/api';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs`);
        const data = await response.json();

        if (data.success) {
          setBlogs(data.data);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        setError('Error connecting to the server');
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Generate a random color for blog cards
  const getRandomColor = () => {
    const colors = ['#4a6cf7', '#f97316', '#eab308', '#14b8a6', '#8b5cf6', '#ec4899'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.category && blog.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <div className="container">
          <h1>All Blogs</h1>
          <p>Explore our latest articles and insights</p>
        </div>
      </div>

      <div className="blogs-content">
        {!loading && blogs.length > 0 && (
          <div className="search-container">
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="loading">Loading blogs...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="no-blogs">
            <p>No blog posts found. Check back soon for new content!</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="no-blogs">
            <p>No blogs match your search. Try different keywords.</p>
          </div>
        ) : (
          <div className="blogs-grid">
            {filteredBlogs.map(blog => (
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
        )}
      </div>
    </div>
  );
};

export default Blogs;
