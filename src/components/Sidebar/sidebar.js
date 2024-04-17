import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTasks, FaEnvelope, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'; // Import icons from Font Awesome
import './Sidebar.css';

const Sidebar = ({ isLoggedIn, user, onLogin, onLogout }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [showFirstLoginToast, setShowFirstLoginToast] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLogin = () => {
    if (!isLoggedIn) {
      onLogin();
      setShowFirstLoginToast(true);
    }
  };

  return (
    <div
      className={`sidebar ${collapsed ? 'collapsed' : ''}`}
      onMouseEnter={toggleCollapse} // Add hover functionality
      onMouseLeave={toggleCollapse} // Add hover functionality
    >
      <div className="sidebar-header glitch-effect">
        <h3>Navigation</h3>
      </div>
      <ul className="sidebar-list">
        <li>
          <Link to="/" title="Home">
            <FaHome /> {!collapsed && <span className="tooltip">Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/about" title="About">
            <FaInfoCircle /> {!collapsed && <span className="tooltip">About</span>}
          </Link>
        </li>
        <li>
          <Link to="/services" title="Services">
            <FaTasks /> {!collapsed && <span className="tooltip">Services</span>}
          </Link>
        </li>
        <li>
          <Link to="/contact" title="Contact">
            <FaEnvelope /> {!collapsed && <span className="tooltip">Contact</span>}
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <div className="user-info">
              <FaUser />
              <span>{user.name}</span> {/* Display user's name */}
              <ul className="user-options">
                <li onClick={onLogout}>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </li>
                {/* Additional user options can be added here */}
              </ul>
            </div>
          </li>
        ) : (
          <li>
            {!collapsed ? (
              <button onClick={handleLogin} className="login-btn">
                <FaSignInAlt />
                <span>Login</span>
              </button>
            ) : (
              <button onClick={handleLogin} className="login-btn-icon">
                <FaSignInAlt />
              </button>
            )}
          </li>
        )}
      </ul>
      {showFirstLoginToast && (
        <div className="toast">Welcome! You've successfully logged in.</div>
      )}
    </div>
  );
};

export default Sidebar;
