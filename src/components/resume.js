/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import resume from '../images/vico_lee_resume.png';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="resume-page">
        <img src={resume} alt="resume" className="resume" />
      </div>
    );
  }
}

export default Resume;
