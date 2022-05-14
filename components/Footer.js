import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="https://github.com/dannelson714">
            <i class="fa fa-github" style="font-size:24px"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href="https://www.linkedin.com/in/daniel-nelson-24a97123/">
            <i class="fa fa-twitter" style="font-size:24px"></i>
        </a>
      </li>
      <li className="nav-item">
      <a href="https://twitter.com/dannelson">
            <i class="fa fa-github" style="font-size:24px"></i>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
