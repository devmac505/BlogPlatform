import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme === 'dark' ? 'active' : ''}`}>
          <FontAwesomeIcon 
            icon={theme === 'light' ? faSun : faMoon} 
            className="toggle-icon"
          />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
