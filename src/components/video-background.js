import { h } from 'preact';

export default () => (
  <div class='Video-Background'>
    <video class='Video-Background__video' autoplay loop poster='./img/plants.jpg'>
      <source src='./vid/plants.mp4' type='video/mp4' />
    </video>
  </div>
);
