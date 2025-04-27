import { useState, useEffect } from 'react';
import blogService from '../services/blogService';

// Custom hook for fetching a single blog
const useBlog = (id) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await blogService.getBlogById(id);
        setBlog(data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { blog, loading, error };
};

export default useBlog;
