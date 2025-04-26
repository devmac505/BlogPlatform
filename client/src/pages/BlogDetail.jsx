import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faTag, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import API_URL from '../config/api';
import './BlogDetail.css';

// Simple syntax highlighting function
const highlightCode = (code, language) => {
  if (!code) return '';

  // Basic syntax highlighting for JavaScript
  if (language.toLowerCase() === 'javascript' || language.toLowerCase() === 'js') {
    // Replace keywords
    let highlighted = code
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|try|catch|throw|new|this)\b/g, '<span class="keyword">$1</span>')
      // Replace strings
      .replace(/(["'`])(.*?)\1/g, '<span class="string">$1$2$1</span>')
      // Replace comments
      .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
      // Replace functions
      .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="function">$1</span>(')
      // Replace numbers
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
      // Replace operators
      .replace(/([=+\-*/%&|^<>!?:.])/g, '<span class="operator">$1</span>');

    return highlighted;
  }

  return code; // Return unmodified for other languages
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs/${id}`);
        const data = await response.json();

        if (data.success) {
          setBlog(data.data);
        } else {
          setError('Failed to load blog post');
        }
      } catch (error) {
        setError('Error connecting to the server');
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="loading">Loading blog post...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="error-message">
            {error || 'Blog post not found'}
            <Link to="/blogs" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-header" style={{ backgroundColor: '#4a6cf7' }}>
        <div className="container">
          <Link to="/blogs" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Blogs
          </Link>
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            <div className="meta-item">
              <FontAwesomeIcon icon={faCalendarAlt} />
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="meta-item">
              <FontAwesomeIcon icon={faUser} />
              {blog.author || 'Anonymous'}
            </div>
            {blog.category && (
              <div className="meta-item">
                <FontAwesomeIcon icon={faTag} />
                {blog.category}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          {blog.image && (
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
          )}

          <div className="blog-text">
            {blog.content.split('\n').map((paragraph, index) => {
              // Check if paragraph is a code snippet (starts with ```code)
              if (paragraph.startsWith('```')) {
                const language = paragraph.slice(3).trim();

                // Find the closing backticks
                let remainingContent = blog.content.slice(blog.content.indexOf(paragraph) + paragraph.length);
                const endIndex = remainingContent.indexOf('```');

                if (endIndex !== -1) {
                  // Extract the code content between the backticks
                  const codeContent = remainingContent.slice(
                    remainingContent.indexOf('\n') + 1,
                    endIndex
                  ).trim();

                  // Skip the next lines that are part of this code block
                  const linesToSkip = codeContent.split('\n').length + 2; // +2 for opening and closing ```

                  // Update the index to skip processed lines
                  index += linesToSkip;

                  return (
                    <div className="code-snippet" key={index}>
                      <div className="code-header">
                        <span className="code-language">{language || 'code'}</span>
                      </div>
                      <pre className="code-block">
                        <code dangerouslySetInnerHTML={{ __html: highlightCode(codeContent, language) }}></code>
                      </pre>
                    </div>
                  );
                }
              }

              // Check if paragraph is an image link (format: ![alt](url))
              const imageRegex = /!\[(.*?)\]\((.*?)\)/;
              const imageMatch = paragraph.match(imageRegex);

              if (imageMatch) {
                const [fullMatch, altText, imageUrl] = imageMatch;
                const remainingText = paragraph.replace(fullMatch, '').trim();

                return (
                  <div className="blog-image-container" key={index}>
                    <img
                      src={imageUrl}
                      alt={altText || 'Blog image'}
                      className="inline-blog-image"
                    />
                    {remainingText && <p>{remainingText}</p>}
                  </div>
                );
              }

              // Regular paragraph
              return paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />;
            })}
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-tags">
              <h3>Tags:</h3>
              <div className="tags-list">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
