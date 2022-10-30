import React from 'react';
import { Link } from "react-router-dom";
import styles from './Nav.scss';
import Logo from '';
export interface NavProps {
  prop?: string;
}

export function Nav({prop = 'default value'}: NavProps) {
  return <div className={styles.Nav}>Nav {prop}</div>;
}

import Logo from './cssStilos/punk.jpg'



function Nav({onSearch}) {
  return (
    <nav className="navbar nav">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;