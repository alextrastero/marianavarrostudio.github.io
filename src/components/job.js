import { h } from 'preact';

const smallTags = (tags) =>
  tags.map((tag, idx) => <span class='job__tag'>{tag}{idx === tags.length - 1 ? '' : ', '}</span>);

const Job = ({
  title = 'Title',
  tags = ['one', 'two'],
  link = 'http://www.google.com',
  imageUrl = 'img/showcase/pic.jpg'
}) => (
  <div class='job'>
    <img class='job__image' alt={title} src={`/img/showcase/${imageUrl}.jpeg`} />
    <div class='job__tags'>{smallTags(tags)}</div>
    <h2 class='job__title'>{title}</h2>
    <a class='job__link' href={link}>READ MORE</a>
  </div>
);

export default Job;
