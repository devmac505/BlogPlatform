const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogStats
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router
  .route('/')
  .get(getBlogs);

router
  .route('/:id')
  .get(getBlog);

// Protected routes (admin only)
router
  .route('/stats')
  .get(protect, authorize('admin'), getBlogStats);

router
  .route('/')
  .post(protect, authorize('admin'), createBlog);

router
  .route('/:id')
  .put(protect, authorize('admin'), updateBlog)
  .delete(protect, authorize('admin'), deleteBlog);

module.exports = router;
