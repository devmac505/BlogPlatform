import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import API_URL from '../../config/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faEdit,
  faCalendarAlt,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    categoryCounts: [],
    recentBlogs: []
  });
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs/stats`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (data.success) {
          setStats(data.data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faNewspaper} />
          </div>
          <div className="stat-content">
            <h3>Total Blogs</h3>
            <p className="stat-value">{stats.totalBlogs}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faTag} />
          </div>
          <div className="stat-content">
            <h3>Categories</h3>
            <p className="stat-value">{stats.categoryCounts.length}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Recent Blogs</h2>
          {stats.recentBlogs.length > 0 ? (
            <div className="recent-blogs">
              {stats.recentBlogs.map((blog) => (
                <div className="recent-blog-item" key={blog._id}>
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
                  <div className="blog-actions">
                    <Link to={`/admin/blogs/edit/${blog._id}`} className="edit-btn">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Link>
                    <Link to={`/blog/${blog._id}`} className="view-btn">
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No blogs found</p>
          )}
        </div>

        <div className="dashboard-card">
          <h2>Categories</h2>
          {stats.categoryCounts.length > 0 ? (
            <div className="category-stats">
              {stats.categoryCounts.map((category, index) => (
                <div className="category-item" key={index}>
                  <div className="category-name">{category._id}</div>
                  <div className="category-count">{category.count}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No categories found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
