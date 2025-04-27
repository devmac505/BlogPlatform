import api from './api';

// Blog service with methods for CRUD operations
const blogService = {
  // Get all blogs with optional pagination
  getBlogs: async (page = 1, limit = 10) => {
    try {
      const response = await api.get(`/blogs?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get featured blogs
  getFeaturedBlogs: async (limit = 6) => {
    try {
      const response = await api.get(`/blogs/featured?limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get a single blog by ID
  getBlogById: async (id) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create a new blog
  createBlog: async (blogData) => {
    try {
      const response = await api.post('/blogs', blogData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update an existing blog
  updateBlog: async (id, blogData) => {
    try {
      const response = await api.put(`/blogs/${id}`, blogData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete a blog
  deleteBlog: async (id) => {
    try {
      const response = await api.delete(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default blogService;
