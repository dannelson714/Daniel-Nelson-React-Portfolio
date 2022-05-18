import React from 'react';
import Navigation from './Navigation';
import './styles/Header.css';

function Header(props) {
    return (
      <div className="jumbotron">
        <h1>Daniel Nelson Professional Portfolio Website</h1>
        <div className={`container${props.fluid ? '-fluid' : ''}`}>
          {props.children}
        </div>
      </div>
    );

}


export default Header;