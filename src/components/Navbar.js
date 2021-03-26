import React from 'react';

//prop-types
import PropTypes from 'prop-types';

//navigation
import { Link } from 'react-router-dom';

//logo
import logo from '../images/jemp.jpg';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';



const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HideAppBar = () => {

  return (
    <React.Fragment>
      <div  className='appbar1'>
      <HideOnScroll>
        <AppBar style={{ background: '#2E2E2E' }}>
          <Toolbar>
            <ul className = "navbar-ul">
              <li className = "navbar-li"><img src = {logo} alt = 'logo'/></li>
              <li className = "navbar-li">
                <Link to="/">Home</Link>
              </li>
              <li className = "navbar-li">
                <Link to="/about">About</Link>
              </li>
              <li className = "navbar-li">
                <Link to="/skills">Skills</Link>
              </li>
              <li className = "navbar-li">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      </div>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
  );
}

export default HideAppBar
