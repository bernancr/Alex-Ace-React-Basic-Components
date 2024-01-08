import React from 'react';
import '../../components/WebinarCard/WebinarCard.css';

function WebinarCard() {
  // Definimos un arreglo con los datos de las imágenes y los títulos
  const data = [
    {
      title: 'Artificial Intelligence',
      image: '../assets/about/tec1_About.png',
      text: 'Mastering the Art of Sports Predictions: Strategies and Tools for Success',
    },
    {
      title: 'Sports Data',
      image: '../assets/about/tec2_About.png',
      text: 'The Science of Sports Betting: Analyzing Data and Trends for Accurate Picks',
    },
    {
      title: 'NFL 3',
      image: '../assets/about/tec3_About.png',
      text: 'Betting Smarter, Not Harder: Tips and Techniques for Sports Predictions',
    },
    {
      title: 'Expert Simulations',
      image: '../assets/about/tec1_About.png',
      text: 'Winning the Game: Insider Insights into Effective Sports Betting Selections',
    },
    // Agrega más objetos de datos según sea necesario
  ];

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="card col-8 col-sm-3 m-2 p-2">
          <a href='#' className="card-body text-center">
            <h4 className="card-title text-center">{item.title}</h4>
            <img className='imgNews' src={item.image} alt={item.title} />
            <h5>{item.text}</h5>
          </a>
        </div>
      ))}
    </>
  );
}

export default WebinarCard;
