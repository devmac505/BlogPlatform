import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import BlogList from './pages/admin/BlogList';
import BlogForm from './pages/admin/BlogForm';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (children.type === AdminLayout && user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app">
            <Routes>
            {/* Public routes with header and footer */}
            <Route path="/" element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            } />
            <Route path="/blogs" element={
              <>
                <Header />
                <Blogs />
                <Footer />
              </>
            } />
            <Route path="/blog/:id" element={
              <>
                <Header />
                <BlogDetail />
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            } />

            {/* Auth routes */}
            <Route path="/login" element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            } />
            <Route path="/register" element={
              <>
                <Header />
                <Register />
                <Footer />
              </>
            } />

            {/* Admin routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="blogs" element={<BlogList />} />
              <Route path="blogs/new" element={<BlogForm />} />
              <Route path="blogs/edit/:id" element={<BlogForm />} />
            </Route>
          </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
