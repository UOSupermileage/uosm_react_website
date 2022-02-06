import React from 'react';
import styles from './Landing.module.css';
import Orange from '../../media/orange_n_black.jpeg';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';

function Landing() {
  const handleClick = () =>{
    return;
  }

  return (
    <div className={styles.main} >
        {/* TO USE VIDEO LATER
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
        </div>
        */}
      <img 
        alt="Orange Background" 
        src={Orange} 
        style={{
          position: "absolute",
          width: "100%",
          left: "0%",
          top: "0%",
          height: "100%",
          objectFit: "cover",
          transform: "translate (-50%, -50%)",
          zIndex: "-1",
        }} 
      />
      <div className={styles.info}>
        <Box sx={{ m: "25rem" }} />
        <Typography variant="h1" color={"#FFFFFF"} > WELCOME TO UO SUPERMILEAGE </Typography>
        <Typography variant="h3" color={'#FFFFFF'}> The Forefront of Electric Car Racing at uOttawa </Typography>
        <Button onClick={handleClick}>
          <Link to="join_us" spy={true} smooth={true}>
            Join Us
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Landing;
