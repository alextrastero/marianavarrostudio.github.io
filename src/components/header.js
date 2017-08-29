import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
  render(props) {
    return (
      <header class='header'>
        <div class='header__logo'>
          <h1>Maria Navarro</h1>
        </div>
        <div>
          <nav>
            <Link activeClassName='is-active' href='/work'>WORK</Link>
            <Link activeClassName='is-active' href='/profile/jose'>XXX</Link>
            <Link activeClassName='is-active' href='/profile/john'>CONTACT</Link>
            <Link activeClassName='is-active' href='/profile/links'>LINKS</Link>
          </nav>
        </div>
      </header>
    );
  }
}
