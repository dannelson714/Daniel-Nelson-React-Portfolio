import React from 'react';
import Navigation from './Navigation';
import './styles/Header.css';

function Header() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <Navigation />
        </div>
      </div>
    );

}


export default Header;