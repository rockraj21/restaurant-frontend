import React, { useState } from 'react';
import './ThemeSwitcher.css'; // Ensure this CSS file exists

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <button className="theme-switch" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default ThemeSwitcher;
