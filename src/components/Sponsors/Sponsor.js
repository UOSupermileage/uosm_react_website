import React from 'react';
import './Sponsors.css';

function Sponsor(props) {
  return (
    <div className="sponsor">
      <h2 className="sponsor-item">{props.title}</h2>
      <a className="sponsor-item" href={props.link} target="_blank">
        <img src={props.src} height={props.height} width={props.width} />
      </a>

      <p className="sponsor-item">{props.description}</p>
    </div>
  );
}

export default Sponsor;
