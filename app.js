import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img className='background' src='/ocean.jpg' alt='ocean'/>;
const title = "";

const images = []

for (const animal in animals) {
  images.push(
  <img 
  key={animal}
  className='animal'
  alt={animal}
  src={animals[animal].image}
  ariaLabel={animal}
  role='button'
  onClick={displayFact}
   />
   );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innderHTML = funFact;
}

const animalFacts = (
  <div>
  <h1>{title == "" ? 'Click an animal for a fun fact' : title}</h1>
  {background}
  <div className='animals'>
  {images}
  </div>
  </div>);



ReactDOM.render(animalFacts, document.getElementById("root"));