import { useContext } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faNewspaper,
  faPlus,
  faSignOutAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/AdminLayout.css';
import { useState } from 'react';

const AdminLayout = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when route changes (mobile)
  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="admin-layout">
      <div className={`admin-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="admin-user">
          <div className="user-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-info">
            <h3>{user?.name}</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link 
                to="/admin/dashboard" 
                className={location.pathname === '/admin/dashboard' ? 'active' : ''}
                onClick={closeSidebar}
              >
                <FontAwesomeIcon icon={faTachometerAlt} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/blogs" 
                className={location.pathname === '/admin/blogs' ? 'active' : ''}
                onClick={closeSidebar}
              >
                <FontAwesomeIcon icon={faNewspaper} />
                Manage Blogs
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/blogs/new" 
                className={location.pathname === '/admin/blogs/new' ? 'active' : ''}
                onClick={closeSidebar}
              >
                <FontAwesomeIcon icon={faPlus} />
                Add New Blog
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </button>
        </div>
      </div>
      
      <div className="admin-main">
        <div className="admin-header">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="header-title">
            {location.pathname === '/admin/dashboard' && 'Dashboard'}
            {location.pathname === '/admin/blogs' && 'Manage Blogs'}
            {location.pathname === '/admin/blogs/new' && 'Add New Blog'}
            {location.pathname.startsWith('/admin/blogs/edit/') && 'Edit Blog'}
          </div>
        </div>
        
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
