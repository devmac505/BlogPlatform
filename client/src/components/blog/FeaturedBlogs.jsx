import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import Button from '../ui/Button';
import Loading from '../ui/Loading';
import blogService from '../../services/blogService';
import './FeaturedBlogs.css';

const FeaturedBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        setLoading(true);
        const data = await blogService.getFeaturedBlogs(3);
        setFeaturedBlogs(data);
        setError(null);
      } catch (err) {
        setError('Failed to load featured blogs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  if (loading) {
    return (
      <section className="featured-blogs-section">
        <div className="container">
          <h2 className="section-title">Featured Blogs</h2>
          <Loading />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="featured-blogs-section">
        <div className="container">
          <h2 className="section-title">Featured Blogs</h2>
          <div className="featured-blogs-error">{error}</div>
        </div>
      </section>
    );
  }

  if (featuredBlogs.length === 0) {
    return null;
  }

  return (
    <section className="featured-blogs-section">
      <div className="container">
        <h2 className="section-title">Featured Blogs</h2>
        <p className="section-subtitle">Discover our most popular articles</p>
        
        <div className="featured-blogs-grid">
          {featuredBlogs.map(blog => (
            <div className="featured-blog-item" key={blog._id}>
              <BlogCard blog={blog} variant="featured" />
            </div>
          ))}
        </div>
        
        <div className="featured-blogs-cta">
          <Link to="/blogs">
            <Button variant="outline">View All Blogs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
