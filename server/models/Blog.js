const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    content: {
      type: String,
      required: [true, 'Please add content'],
    },
    author: {
      type: String,
      required: [true, 'Please add an author'],
      trim: true
    },
    image: {
      type: String,
      default: 'default-blog-image.jpg'
    },
    tags: {
      type: [String],
      default: []
    },
    category: {
      type: String,
      default: 'Uncategorized'
    },
    excerpt: {
      type: String,
      maxlength: [200, 'Excerpt cannot be more than 200 characters']
    },
    readTime: {
      type: String,
      default: '5 min read'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Blog', BlogSchema);
