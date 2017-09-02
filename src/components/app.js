import { h, Component } from 'preact';
import { Router } from 'preact-router';
// Add this somewhere
// import VideoBg from './video-background';

import Header from './header';
import Work from './work';
import Profile from './profile';
import Contact from './contact';
import Footer from './footer';
import About from './about';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute(e) {
    this.currentUrl = e.url;
  };

  render(props) {
    return (
      <div id='app' class='container'>
        <Header />
        <div class='content'>
          <Router onChange={this.handleRoute}>
            <Work path='/work/:tag?' />
            <Contact path='/contact' />
            <About path='about' />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}
