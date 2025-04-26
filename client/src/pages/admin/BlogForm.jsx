import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import API_URL from '../../config/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/BlogForm.css';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    excerpt: '',
    readTime: '',
    image: ''
  });

  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      const fetchBlog = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${API_URL}/api/blogs/${id}`);
          const data = await response.json();

          if (data.success) {
            const blog = data.data;
            setFormData({
              title: blog.title || '',
              content: blog.content || '',
              author: blog.author || '',
              category: blog.category || '',
              tags: blog.tags ? blog.tags.join(', ') : '',
              excerpt: blog.excerpt || '',
              readTime: blog.readTime || '',
              image: blog.image || ''
            });
          } else {
            setError('Failed to load blog');
          }
        } catch (error) {
          setError('Error loading blog');
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Process tags from comma-separated string to array
    const processedData = {
      ...formData,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
    };

    try {
      const url = isEditMode
        ? `${API_URL}/api/blogs/${id}`
        : `${API_URL}/api/blogs`;

      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(processedData)
      });

      const data = await response.json();

      if (data.success) {
        navigate('/admin/blogs');
      } else {
        setError(data.error || 'Failed to save blog');
      }
    } catch (error) {
      setError('Error saving blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditMode) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog-form-container">
      <h2>{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="readTime">Read Time</label>
            <input
              type="text"
              id="readTime"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              placeholder="e.g. 5 min read"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g. react, javascript, web development"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows="3"
            placeholder="Brief summary of the blog (max 200 characters)"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            required
          ></textarea>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/admin/blogs')}
          >
            <FontAwesomeIcon icon={faTimes} /> Cancel
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            <FontAwesomeIcon icon={faSave} /> {loading ? 'Saving...' : 'Save Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
