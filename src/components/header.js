import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Match from 'preact-router/match';
// import style from './style';

export default class Header extends Component {
  render(props) {
    return (
      <header class='{style.header}'>
        <h1>Maria Navarro</h1>
        <div>
          <nav>
            <Link activeClassName='{style.active}' href="/work">WORK</Link>
            <Link activeClassName='{style.active}' href="/profile/jose">XXX</Link>
            <Link activeClassName='{style.active}' href="/profile/john">CONTACT</Link>
            <Link activeClassName='{style.active}' href="/profile/links">LINKS</Link>
          </nav>
        </div>
      </header>
    );
  }
}
