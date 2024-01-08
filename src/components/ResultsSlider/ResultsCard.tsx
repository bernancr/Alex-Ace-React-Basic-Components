import React from 'react';
import './resultsCard.css';


function ResultsCard() {
  // Definimos un arreglo con los datos de las imágenes y los títulos
  const data = [
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,    
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,    
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,    
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    {
        date: '01/01/2024 15:00 PST',
        team1: 'Dallas Cowboys',
        score1: 12,
        team2: 'Seattle Seahawks',
        score2: 5,    
        image1: '../assets/results/team1.png',
        image2: '../assets/results/team2.png',
    },
    // Agrega más objetos de datos según sea necesario
  ];

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="card col-12 col-lg-3 m-2 highBox">
          <a href='#' className="card-body text-center cardResults">
            <p className='date'>{item.date}</p>
            <div className='col-12'>
                <div className='d-flex justify-content-between'>
                    <span className='col-1'><img src={item.image1} /></span>
                    <span className='col-10'>{item.team1}</span>
                    <span className='col-1'>{item.score1}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='col-1'><img src={item.image2} /></span>
                    <span className='col-10'>{item.team2}</span>
                    <span className='col-1'>{item.score2}</span>
                </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default ResultsCard;