import React from 'react';
import { Home, LogOut } from 'lucide-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import gImage from '../../assets/Google-Gemini-AI-2 (1).webp';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard2' },
];

//Log Out function
const useLogout = () => {
  const navigate = useNavigate(); // Initialize useNavigate inside the custom hook
  
  const logout = () => {
    console.log('Logout button clicked'); // Debugging message
    localStorage.removeItem('token'); // Clear JWT
    console.log('Logged out successfully.');
    navigate('/'); // Redirect to login page
  };

  return { logout };
};



export function Sidebar({ className, ...props }) {

  const { logout } = useLogout(); // custom hook invoked inside a component

  return (
    <div className={`bg-card flex flex-col ${className}`} {...props}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-foreground">AI Resume Analyzer</h1>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <span className="mr-1">Powered by</span>
          <img
            src={gImage}
            alt="Google Gemini"
            width={90}
            height={20}
            className="inline-block"
          />
        </div>
      </div>
      <nav className="flex-1 mt-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center px-6 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="p-6">
        <button 
          className="w-full flex items-center justify-start px-4 py-2 text-white hover:text-white hover:bg-accent rounded-md transition-colors duration-200"
          onClick={logout} //loging out
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
};

