import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { formatDate } from '../../utils/dateUtils';
import './BlogCard.css';

const BlogCard = ({ blog, variant = 'default' }) => {
  return (
    <Link to={`/blog/${blog._id}`} className="blog-card-link">
      <Card 
        variant={variant === 'featured' ? 'elevated' : 'default'} 
        className={`blog-card ${variant === 'featured' ? 'blog-card-featured' : ''}`}
        hoverable
      >
        <div className="blog-card-image">
          {blog.image ? (
            <img src={blog.image} alt={blog.title} />
          ) : (
            <div className="blog-card-image-placeholder">
              <span>{blog.title.charAt(0)}</span>
            </div>
          )}
          {variant === 'featured' && <div className="blog-card-featured-badge">Featured</div>}
        </div>
        
        <Card.Body>
          <h3 className="blog-card-title">{blog.title}</h3>
          <p className="blog-card-excerpt">
            {blog.content.length > 150 
              ? `${blog.content.substring(0, 150)}...` 
              : blog.content}
          </p>
          <div className="blog-card-meta">
            <span className="blog-card-author">By {blog.author}</span>
            <span className="blog-card-date">{formatDate(blog.date)}</span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'featured'])
};

export default BlogCard;
