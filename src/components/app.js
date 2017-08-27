import { h } from 'preact';
import VideoBg from './video-background';

const App = () => {
  return (
    <div>
      <div class='temp'>
        <p>Lorem ipsum dolor sit amet, urna lectus, nibh parturient amet, fusce ac. Pharetra et lacus ullamcorper cras porta purus. Aenean dolor. Aenean at, ante mauris interdum luctus amet. Iaculis praesent donec et lectus tortor, id maecenas montes nam, tortor purus. Vel semper et mauris et tempor, aliquet nec dolor dignissim, est neque erat laoreet sed. Dictumst in nunc. Sed et imperdiet praesent tempor diam. Lacinia sodales vel est, dolor vestibulum est et gravida odio. Mattis nam, tincidunt lorem quis nam mattis, elementum placerat, consectetuer dolor ornare vehicula, etiam dui eu eu mi sit.</p>
        <VideoBg />
        <a href='#contact'>contact</a>
      </div>
      <div class='contact' id='contact'>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, urna lectus, nibh parturient amet, fusce ac. Pharetra et lacus ullamcorper cras porta purus. Aenean dolor. Aenean at, ante mauris interdum luctus amet. Iaculis praesent donec et lectus tortor, id maecenas montes nam, tortor purus. Vel semper et mauris et tempor, aliquet nec dolor dignissim, est neque erat laoreet sed. Dictumst in nunc. Sed et imperdiet praesent tempor diam. Lacinia sodales vel est, dolor vestibulum est et gravida odio. Mattis nam, tincidunt lorem quis nam mattis, elementum placerat, consectetuer dolor ornare vehicula, etiam dui eu eu mi sit.</p>
      </div>
    </div>
  );
};

export default App;
