import { h, Component } from 'preact';
import { Router } from 'preact-router';
// Add this somewhere
// import VideoBg from './video-background';

import Header from './header';
import Work from './work';
import Profile from './profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute(e) {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id='app' class='container'>
        <Header />
        <Router onChange={this.handleRoute}>
          <Work path='/work/:tag?' />
          <Profile path='/profile/' user='me' />
          <Profile path='/profile/:user' />
        </Router>
      </div>
    );
  }
}
