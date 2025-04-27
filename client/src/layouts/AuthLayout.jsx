import PropTypes from 'prop-types';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="auth-content">
        <div className="auth-container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
