import { h } from 'preact';
import Job from './job';

const jobs = [
  {
    title: 'Female Tshirt promotion',
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
  return (
    <div class='Showcase__elem'>
      <Job {...job} />
    </div>
  );
};

const handleFiltering = (activeTag) => {
  if (activeTag) {
    return jobs.filter(job => job.tags.includes(activeTag)).map(jobMapping);
  } else {
    return jobs.map(jobMapping);
  }
};

const Showcase = ({ activeTag }) => (
  <div class='Showcase'>
    <div class='Showcase__list'>
      { handleFiltering(activeTag) }
    </div>
  </div>
);

export default Showcase;
