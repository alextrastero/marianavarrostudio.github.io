import { h } from 'preact';

const smallTags = (tags) =>
  tags.map((tag, idx) => <span class='Job__tag'>{tag}{idx === tags.length - 1 ? '' : ', '}</span>);

const Job = ({
  title = 'Title',
  tags = ['one', 'two'],
  link = 'http://www.google.com',
  imageUrl = 'img/showcase/pic.jpg'
}) => (
  <div class='Job'>
    <img class='Job__image' alt={title} src={`/img/showcase/${imageUrl}.jpeg`} />
    <div class='Job__tags'>{smallTags(tags)}</div>
    <h2 class='Job__title'>{title}</h2>
    <a class='Job__link' href={link}>MORE</a>
  </div>
);

export default Job;
