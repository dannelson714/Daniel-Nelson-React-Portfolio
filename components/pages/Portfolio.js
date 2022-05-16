import React from 'react';
import Project from './Project';

const projects = [
  {
      id: 1,
      name: "Pandemic Blight",
      img: "../../assets/65581C0C-17DB-4BDE-ADBA-BE742076CC08_1_201_a.jpeg",
      githubURL: "https://github.com/dannelson714/Pandemic-Blight",
      deployedURL: "https://dwarrick91.github.io/Pandemic-Blight/",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    img: "../../assets/B147618C-64A7-4AEE-9F96-4AE2D2767DD7_1_201_a.jpeg",
    githubURL: "https://github.com/dannelson714/Weather-Dashboard",
    deployedURL: "https://dannelson714.github.io/Weather-Dashboard",
},
{
  id: 3,
  name: "Notetaker App",
  img: "../../assets/56D110C2-B28A-42A3-AD9E-8807C032CB02_1_105_c.jpeg",
  githubURL: "https://github.com/dannelson714/Note-Taker",
  deployedURL: "https://serene-shore-33969.herokuapp.com/",
},
{
  id: 4,
  name: "Film Fan",
  img: "../../assets/filmfan.png",
  githubURL: "https://github.com/dannelson714/film-fan",
  deployedURL: "https://floating-depths-94622.herokuapp.com/",
},
{
  id: 5,
  name: "Work Day Scheduler",
  img: "../../assets/Screen Shot 2022-03-24 at 4.23.17 PM.jpeg",
  githubURL: "https://github.com/dannelson714/Work-Day-Scheduler",
  deployedURL: "https://dannelson714.github.io/Work-Day-Scheduler",
},
{
  id: 6,
  name: "Music Theory Quiz",
  img: "../../assets/Screen Shot 2022-03-22 at 4.06.20 PM.jpeg",
  githubURL: "https://github.com/dannelson714/Music-Theory-Quiz",
  deployedURL: "https://dannelson714.github.io/Music-Theory-Quiz",
},

]

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <Project id={projects.id} name={projects.name} img={projects.img} githubURL={projects.githubURL} deployedURL={projects.deployedURL} />
    </div>
  );
}