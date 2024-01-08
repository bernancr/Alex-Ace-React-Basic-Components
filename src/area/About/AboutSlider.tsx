import React, { useState, useRef } from 'react';
import AboutCard from '../../components/AboutCard/AboutCard';

function AboutSlider() {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta el factor de velocidad según tus necesidades
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Calcula si el botón "Previous" debe estar deshabilitado
  const isPrevDisabled = () => {
    if (!containerRef.current) return false;
    return containerRef.current.scrollLeft === 0;
  };

  // Calcula si el botón "Next" debe estar deshabilitado
  const isNextDisabled = () => {
    if (!containerRef.current) return false;
    const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    return containerRef.current.scrollLeft >= maxScrollLeft;
  };

  const smoothScrollTo = (scrollTo: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth', // Utiliza un desplazamiento suave
      });
    }
  };

  return (
    <div className="container py-2">
      <h4 className="text-center">Our Technologies</h4>
      <div
        className="d-flex flex-row scroll-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <AboutCard />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            if (containerRef.current) {
              const scrollTo = containerRef.current.scrollLeft - 200; // Ajusta la cantidad de desplazamiento necesario
              smoothScrollTo(scrollTo);
            }
          }}
          disabled={isPrevDisabled()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill="#FFFFFF" d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z"/>
          </svg>
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            if (containerRef.current) {
              const scrollTo = containerRef.current.scrollLeft + 200; // Ajusta la cantidad de desplazamiento necesario
              smoothScrollTo(scrollTo);
            }
          }}
          disabled={isNextDisabled()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill="#FFFFFF" d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AboutSlider;
