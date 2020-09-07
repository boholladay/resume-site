import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bo Holladay | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is ',
  name: 'Bo Holladay.',
  subtitle: 'I like digital design.',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'bo-oregonCoast2.jpg',
  paragraphOne:
    'I am a software developer with a focus in design. I love building beautiful content with purposeful functionality. I am constantly searching for ways to engage with complex problems and develop clean and simple solutions.',
  paragraphTwo:
    'I am a freelance graphic designer. Most of my clientele are researchers looking for a graphic to represent the findings of a paper they are publishing, but I have also done logos and other work.',
  paragraphThree:
    'I have an extensive work background in biological research. I most recently was the lab systems manager for the Appled Chemical Ecology Technology program at Cornell University.',
  resume:
    'https://docs.google.com/document/d/1NRYlgFPTPQ0yjK9Gd5byC7pydY5vyP9HI-s7dBnwFuk/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'acet-world.jpg',
    title: 'ACET.world',
    info: 'Applied Chemical Ecology Technology website. Built using React on GatsbyJS framework.',
    info2:
      'This website serves as the main point of contact for the lab. The community can engage with the research, stay up to date on current projects, and contact members for potential collaboration.',
    url: 'http://acet.world',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'graphics-thumbnail.jpg',
    title: 'Graphical Abstracts',
    info:
      'Often alongside journal publications, researchers will provide a graphic representing the main findings of the article.',
    info2:
      'Using my skills as a graphic designer and understanding of research practices, I communicate with the author to extract the best way to represent their findings in a polished, hand-drawn, digital image.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3D-design.jpg',
    title: 'Product Design and Digital Prototyping',
    info: 'Creation of 3D models using Blendr and/or Fusion 360 software.',
    info2:
      'Designs can be for concepts or custom use. Some examples are a custom microscope table with branding or a microfluidics chip for cellular behavior studies.',
    url: 'http://acet.world/cnfAdventures/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's work together!",
  btn: 'Email',
  email: 'yadalloh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/yadallohbo',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/bo-holladay',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/boholladay',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
