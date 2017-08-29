import { h, Component } from 'preact';
// import style from './style';

import Tags from './tags';
import Showcase from './showcase';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        'initial',
        'tags',
        'that',
        'do',
        'something'
      ]
    };
  }

  // Note: `user` comes from the URL, courtesy of our router
  render(props) {
    return (
      <div class='work'>
        <Tags tags={this.state.tags} />
        <Showcase activeTag={props.tag} />
      </div>
    );
  }
}
