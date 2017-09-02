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
            <Link activeClassName='is-active' className='about-link' href='/about'>ABOUT</Link>
            <Link activeClassName='is-active' className='work-link' href='/work'>WORK</Link>
            <Link activeClassName='is-active' className='contact-link' href='/contact'>CONTACT</Link>
            <Link activeClassName='is-active' className='links-link' href='/profile/links'>LINKS</Link>
          </nav>
        </div>
      </header>
    );
  }
}
