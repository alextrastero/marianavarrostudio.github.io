import { h, Component } from 'preact';
// import style from './style';

const smallTags = (tags) =>
  tags.map((tag, idx) => <span class='foo'>{tag}{idx === tags.length - 1 ? '' : ', '}</span>);

const jobs = [
  {
    title: 'One else',
    tags: ['initial'],
    link: 'somelink',
    imageUrl: 'pic'
  },
  {
    title: 'Two else',
    tags: ['initial', 'tags'],
    link: 'somelink',
    imageUrl: 'pic1'
  },
  {
    title: 'Three else',
    tags: ['something'],
    link: 'somelink',
    imageUrl: 'pic2'
  },
  {
    title: 'Three else',
    tags: ['do', 'that'],
    link: 'somelink',
    imageUrl: 'pic3'
  },
  {
    title: 'Three else',
    tags: ['do', 'that'],
    link: 'somelink',
    imageUrl: 'pic4'
  },
  {
    title: 'Three else',
    tags: ['do', 'that'],
    link: 'somelink',
    imageUrl: 'pic5'
  }
];

const jobMapping = (job) => {
  return <Job {...job} />
};

const handleFiltering = (activeTag) => {
  if (activeTag) {
    return jobs.filter(job => job.tags.includes(activeTag)).map(jobMapping);
  } else {
    return jobs.map(jobMapping)
  }
}

const Job = ({
  title = 'Title',
  tags = ['one', 'two'],
  link = 'http://www.google.com',
  imageUrl = 'img/showcase/one.jpg'
}) => (
  <div class='{style.showcase__elem}'>
    <img alt={title} src={`../assets/img/showcase/${imageUrl}.png`} />
    <div>{smallTags(tags)}</div>
    <h2>{title}</h2>
    <a href={link}>READ MORE</a>
  </div>
);

const Showcase = ({ activeTag }) => (
  <div class='{style.showcase}'>
    <div class='{style.showcase__list}'>
      { handleFiltering(activeTag) }
    </div>
  </div>
);

export default Showcase;
