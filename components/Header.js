import React from 'react';
import Navigation from './Navigation';
import './styles/Header.css';

function Header() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <Navigation />
        </div>
      </div>
    );

}


export default Header;