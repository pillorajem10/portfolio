import React, { useEffect } from 'react';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

//material-ui
import { Button, withStyles } from '@material-ui/core';

// material-ui icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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
        <div data-aos="zoom-in" className="home-left-container">
          <p className="page-title">Hi! My name is Jem Pillora</p>
          <p>Full-stack developer</p>
          <p>
            I am a web developer capable of generating and amplifying websites towards my clients satisfaction.
            I aim towards producing web pages that could bring out the leading aspects of my clients company.
            The technologies I have worked with and mastered are indicated in the skills page of this site.
          </p>
        </div>
        <div data-aos="zoom-in" className="home-right-container">
          <p className="container-title">Visit my social media accounts</p>
          <a href="https://github.com/pillorajem10" target="_blank" rel="noreferrer">
            <Button startIcon={<GitHubIcon/>} className={classes.root}>
              Github
            </Button>
          </a>
          <a href="https://www.facebook.com/pillorajem7" target="_blank" rel="noreferrer">
            <Button startIcon={<FacebookIcon/>} className={classes.root}>
              facebook
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/jem-pillora-a18794200/" target="_blank" rel="noreferrer">
            <Button startIcon={<LinkedInIcon/>} className={classes.root}>
              Linked-in
            </Button>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHgCMpDgvnKpvWRWVjjRGRsdqCTxtPkHlZJrjHnVzWRRSMNwrQKlTdpdZFvzKjxwxBSNw" target="_blank" rel="noreferrer">
            <Button startIcon={<EmailIcon/>} className={classes.root}>
              gmail
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default withStyles(styles)(Page);
