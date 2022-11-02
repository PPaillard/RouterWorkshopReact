import React from 'react'
import { Link } from 'react-router-dom';

const Articles = () => {
   return (
      <div>
        Articles
        <ul>
          <li>
            <Link to="/articles/1">article #1</Link>
          </li>
          <li>
            <Link to="/articles/2">article #2</Link>
          </li>
        </ul>
      </div>
    );
}

export default Articles