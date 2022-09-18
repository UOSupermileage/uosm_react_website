import { color } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import './Slideshow.css';

function Slideshow(props) {
  const slides = props.slides;
  const delay = 4000;
  const timeoutRef = useRef(null);

  const [index, setIndex] = useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((el, idx) => (
          <div className="slide" key={idx}>
            {el}
          </div>
        ))}
      </div>
      <div className="slideshow-dots">
        {slides.map((el, idx) => (
          <div
            key={idx}
            className={`slideshow-dot${index === idx ? ' active' : ''}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
