import React from 'react';
import '../../components/AboutCard/aboutCard.css';

function AboutCard() {
  // Definimos un arreglo con los datos de las imágenes y los títulos
  const data = [
    {
      title: 'Artificial Intelligence',
      image: '../assets/about/tec1_About.png',
    },
    {
      title: 'Sports Data',
      image: '../assets/about/tec2_About.png',
    },
    {
      title: 'NFL 3',
      image: '../assets/about/tec3_About.png',
    },
    {
      title: 'Expert Simulations',
      image: '../assets/about/tec1_About.png',
    },
    {
      title: 'Technologic Infrastructure',
      image: '../assets/about/tec2_About.png',
    },
    // Agrega más objetos de datos según sea necesario
  ];

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="card col-8 col-sm-3 m-2">
          <a href='#' className="card-body text-center">
            <h4 className="card-title text-center">{item.title}</h4>
            <img className='imgNews' src={item.image} alt={item.title} />
          </a>
        </div>
      ))}
    </>
  );
}

export default AboutCard;