import { h } from 'preact';
import { Link } from 'preact-router/match';

const Tags = ({ tags }) => (
  <div class='tags'>
    <ul>
      {tags.map((tag) => (
        <li>
          <Link activeClassName='active' href={`/work/${tag}`}>{tag}</Link>
        </li>
      ))}
      <li><Link href={`/work`}>ALL</Link></li>
    </ul>
  </div>
);

export default Tags;
