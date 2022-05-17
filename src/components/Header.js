import React from 'react';
import Navigation from './Navigation';
import './styles/Header.css';

function Header(props) {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className={`container${props.fluid ? '-fluid' : ''}`}>
          {props.children}
        </div>
      </div>
    );

}


export default Header;