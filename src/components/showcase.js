import { h, Component } from 'preact';

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
    tags: ['do'],
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
  return <Job {...job} />;
};

const handleFiltering = (activeTag) => {
  if (activeTag) {
    return jobs.filter(job => job.tags.includes(activeTag)).map(jobMapping);
  } else {
    return jobs.map(jobMapping);
  }
};

const Job = ({
  title = 'Title',
  tags = ['one', 'two'],
  link = 'http://www.google.com',
  imageUrl = 'img/showcase/pic.jpg'
}) => (
  <div class='showcase__elem'>
    <img alt={title} src={`/img/showcase/${imageUrl}.jpeg`} />
    <div>{smallTags(tags)}</div>
    <h2>{title}</h2>
    <a href={link}>READ MORE</a>
  </div>
);

const Showcase = ({ activeTag }) => (
  <div class='showcase'>
    <div class='showcase__list'>
      { handleFiltering(activeTag) }
    </div>
  </div>
);

export default Showcase;
