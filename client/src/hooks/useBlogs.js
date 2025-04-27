import { useState, useEffect } from 'react';
import blogService from '../services/blogService';

// Custom hook for fetching blogs with pagination
const useBlogs = (page = 1, limit = 10) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await blogService.getBlogs(page, limit);
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, limit]);

  return { blogs, loading, error, totalPages };
};

export default useBlogs;
