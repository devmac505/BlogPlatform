import PropTypes from 'prop-types';
import BlogCard from './BlogCard';
import Loading from '../ui/Loading';
import './BlogGrid.css';

const BlogGrid = ({ blogs, loading, error, columns = 3 }) => {
  if (loading) {
    return <Loading text="Loading blogs..." />;
  }

  if (error) {
    return <div className="blog-grid-error">{error}</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="blog-grid-empty">No blogs found</div>;
  }

  return (
    <div className={`blog-grid blog-grid-${columns}`}>
      {blogs.map(blog => (
        <div className="blog-grid-item" key={blog._id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

BlogGrid.propTypes = {
  blogs: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3, 4])
};

export default BlogGrid;
