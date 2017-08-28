import { h, Component } from 'preact';
// import style from './style';
import { Link } from 'preact-router/match';

const Tags = ({ tags }) => (
  <div class='{style.tags}'>
    <ul>
      {tags.map((tag) => (
        <li>
          <Link activeClassName='{style.active}' href={`/work/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
