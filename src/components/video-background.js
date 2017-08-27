import { h } from 'preact';

export default () => (
  <div class='video-background'>
    <video class='video-background__video' autoplay loop poster='img/plants.jpg'>
      <source src='assets/vid/plants.mp4' type='video/mp4' />
    </video>
  </div>
);
