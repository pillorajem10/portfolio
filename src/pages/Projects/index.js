import React, { useEffect } from 'react';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

//material-ui
import { Button, withStyles } from '@material-ui/core';

//images
import rbook from './images/recipebook.png';
import rptgen from './images/logo.png';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    borderRadius: 3,
    border: 'solid',
    marginTop: '1rem',
    marginBottom: '1rem',
    color: 'white',
    height: 48,
    width: '15rem',
    padding: 0,
  },
};

const Page = (props) => {
  const { classes } = props;

  useEffect(() => {
    Animation.init({ duartion: 1000 });
  }, []);

  return (
    <>
      <div className="main-container">
        <div data-aos="zoom-in" className="project-container">
          <p className="container-title">Rptgen-v2 (Revamp)</p>
          <div className="image-bg"><img className="project-image" src={rptgen} alt="Rptgen revamp"/></div>
          <p>A report generating tool (PTP, DFR, RFA, PR2, etc). Developed by pillo, kula, colditz.</p>
          <a href="https://rptgen.net/revamp/login" target="_blank" rel="noreferrer">
            <Button className={classes.root}>
              Check it out
            </Button>
          </a>
        </div>
        <div data-aos="zoom-in" className="project-container">
          <p className="container-title">PH Recipebook</p>
          <img className="project-image" src={rbook} alt="PH recipebook"/>
          <p>Check recipes here, cook and share with your family and friends!</p>
          <a href="https://phrecipebook.org/" target="_blank" rel="noreferrer">
            <Button className={classes.root}>
              Check it out
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default withStyles(styles)(Page);
