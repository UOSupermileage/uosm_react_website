import React from 'react';
import './Landing.css';
import Ocean from '../../media/oceans.mp4';
import { Typography } from '@mui/material';

function Landing() {
  return (
    <div className="main bgl">
        <div className="video">
          <video
            autoPlay
            loop
            muted
            style = {{
              position: "absolute",
              width: "100%",
              left: "0%",
              top: "0%",
              height: "100%",
              objectFit: "cover",
              transform: "translate (-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src={Ocean} type="video/mp4" />
          </video>
          <Typography variant="h1" component="div" color={"#FFFFFF"} > Welcome to the UOSM Website</Typography>
        </div>
    </div>
  )
}

export default Landing;
