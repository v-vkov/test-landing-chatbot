import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      width: '100%',
      background: 'rgba(255,255,255,0.95)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      padding: '0 32px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      height: 64
    }}>
      <div style={{ fontWeight: 700, fontSize: 22, marginRight: 40 }}>AI Onboarding</div>
      <nav style={{ display: 'flex', gap: 32 }}>
        <a href="#about" style={{ textDecoration: 'none', color: '#222', fontWeight: 500 }}>About</a>
        <a href="#info" style={{ textDecoration: 'none', color: '#222', fontWeight: 500 }}>Info</a>
        <a href="#contacts" style={{ textDecoration: 'none', color: '#222', fontWeight: 500 }}>Contacts</a>
        <a href="#cases" style={{ textDecoration: 'none', color: '#222', fontWeight: 500 }}>Cases</a>
      </nav>
    </header>
  );
};

export default Header; 