import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div className="container" style={{ marginTop: '100px', minHeight: '80vh', padding: '2rem' }}>
      <h1>Blog Detail</h1>
      <p>This page will display the details of blog with ID: {id}</p>
    </div>
  );
};

export default BlogDetail;
