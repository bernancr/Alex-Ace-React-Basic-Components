import React from 'react';
import '../../components/CommunityCard/communityCard.css';

function CommunityCard() {
  // Definimos un arreglo con los datos de las imágenes y los títulos
  const data = [
    {
      title: 'Register',
      image: '../assets/about/tec1_About.png',
      text: 'Go to Register Button and Click',
    },
    {
      title: 'Confirm Email',
      image: '../assets/about/tec2_About.png',
      text: 'Once you register, your receive an email confirmation. Click on it.',
    },
    {
      title: 'Login',
      image: '../assets/about/tec3_About.png',
      text: 'Fill Login Form up with your credentials and click Login Button',
    },
    {
      title: 'Enjoy',
      image: '../assets/about/tec1_About.png',
      text: 'You have access to all sports predictions and webinars',
    },
    {
      title: 'Select your Webinar',
      image: '../assets/about/tec2_About.png',
      text: 'Click on any webinar on webinar page',
    },
    // Agrega más objetos de datos según sea necesario
  ];

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="card col-8 col-sm-3 m-2">
          <a href='#' className="d-flex flex-wrap card-body justify-content-center align-items-stretch">
            <h4 className="card-title text-center">{item.title}</h4>
            <img className='imgNews' src={item.image} alt={item.title} />
            <h5 className='text-center'>{item.text}</h5>
          </a>
        </div>
      ))}
    </>
  );
}

export default CommunityCard;
