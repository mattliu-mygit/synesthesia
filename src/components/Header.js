import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const headerButton = {
  padding: '0.2rem',
  borderRadius: '0px',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  marginBottom: '0.1rem',
};

function Header() {
  const activeStyle = {
    color: '#89cff0',
    backgroundColor: 'transparent',
  };
  return (
    <>
      <nav className="headerBar" style={{ color: '#D8D8D8' }}>
        <NavLink
          className="btn btn-primary header-btn first-btn"
          style={headerButton}
          activeStyle={activeStyle}
          to="/"
          exact
        >
          Home
        </NavLink>
        {'|'}
        <NavLink
          className="btn btn-primary header-btn"
          style={headerButton}
          activeStyle={activeStyle}
          to="/piano"
        >
          {' '}
          Piano
        </NavLink>
        {'|'}
        <NavLink
          className="btn btn-primary header-btn"
          style={headerButton}
          activeStyle={activeStyle}
          to="/sounds"
        >
          {' '}
          Sounds
        </NavLink>
        {'|'}
        <NavLink
          className="btn btn-primary header-btn"
          style={headerButton}
          activeStyle={activeStyle}
          to="/help-us"
        >
          {' '}
          Random
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
