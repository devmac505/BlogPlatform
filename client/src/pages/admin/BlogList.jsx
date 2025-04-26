import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import API_URL from '../../config/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faPlus,
  faSearch,
  faCalendarAlt,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs`);
        const data = await response.json();

        if (data.success) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`${API_URL}/api/blogs/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (data.success) {
          setBlogs(blogs.filter(blog => blog._id !== id));
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <Link to="/admin/blogs/new" className="add-blog-btn">
          <FontAwesomeIcon icon={faPlus} /> Add New Blog
        </Link>
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="blog-list">
          {filteredBlogs.map((blog) => (
            <div className="blog-item" key={blog._id}>
              <div className="blog-item-content">
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faTag} />
                    {blog.category}
                  </span>
                </div>
                <p className="blog-excerpt">
                  {blog.excerpt || blog.content.substring(0, 150) + '...'}
                </p>
              </div>

              <div className="blog-actions">
                <Link to={`/admin/blogs/edit/${blog._id}`} className="edit-btn">
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(blog._id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
                <Link to={`/blog/${blog._id}`} className="view-btn">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-blogs">
          <p>No blogs found</p>
          <Link to="/admin/blogs/new" className="add-blog-btn">
            <FontAwesomeIcon icon={faPlus} /> Add New Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogList;
