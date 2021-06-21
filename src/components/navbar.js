/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../styles/navbar_style.scss';
import {
  NavLink, withRouter,
} from 'react-router-dom';
import { Link } from 'react-scroll';
// import $ from 'jquery';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.history.location.pathname === '/') {
      return (
        <nav>
          <Link
            activeClass="active"
            to="work-experiences section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span id="experiences">Experiences</span>
          </Link>
          <Link
            activeClass="active"
            to="extracurriculars section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span id="extracurriculars">Extracurriculars</span>
          </Link>
          <Link
            activeClass="active"
            to="projects section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span id="projects">Projects</span>
          </Link>
          {/* <Link exact to="/"><span>Experiences</span></NavLink> */}
          {/* <NavLink exact to="/"><span>Extracurriculars</span></NavLink>
              <NavLink exact to="/"><span>Projects</span></NavLink> */}
          <NavLink exact to="/resume"><span>Resume</span></NavLink>
        </nav>
      );
    } else if (this.props.history.location.pathname === '/resume') {
      return (
        <nav>
          <NavLink exact to="/"><span>Home</span></NavLink>
          <NavLink exact to="/resume"><span>Resume</span></NavLink>
        </nav>
      );
    } else {
      return (
        <div>Invalid route!</div>
      );
    }
  }
}

export default withRouter(NavBar);
