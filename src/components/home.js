/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../styles/style.scss';
import '../styles/home.scss';
import $ from 'jquery';
import {
  faAngleRight, faAngleLeft, faTrophy, faFileAlt, faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OnVisible from 'react-on-visible';
import {
  NavLink,
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    const carousel = $('.carousel');
    let currdeg = 0;

    function rotate(e) {
      if (e.data.d === 'n') {
        currdeg -= 60;
      }
      if (e.data.d === 'p') {
        currdeg += 60;
      }
      carousel.css({
        '-webkit-transform': `rotateY(${currdeg}deg)`,
        '-moz-transform': `rotateY(${currdeg}deg)`,
        '-o-transform': `rotateY(${currdeg}deg)`,
        transform: `rotateY(${currdeg}deg)`,
      });
    }
    $('.next').on('click', { d: 'n' }, rotate);
    $('.prev').on('click', { d: 'p' }, rotate);
  }

  displayContactMe = () => {
    return (
      <div>
        <h2>Contact Me</h2>
        <p>vicoleezy@gmail.com</p>
        <div>
          <a href="mailto:vicoleezy@gmail.com"><img src="src/images/gmail.png" alt="gmail" className="contact-icon" /></a>
          <a href="https://github.com/Vicolee"><img src="src/images/github.png" alt="github" className="contact-icon white-github" /></a>
          <a href="https://www.linkedin.com/in/vicolee/"><img src="src/images/linkedin.png" alt="linkedin" className="contact-icon" /></a>
          <a href="https://www.facebook.com/vico.lzy/"><img src="src/images/facebook.png" alt="facebook" className="contact-icon" /></a>
          <a href="https://www.instagram.com/vicoolee/"><img src="src/images/instagram.png" alt="instagram" className="contact-icon" /></a>
        </div>
      </div>
    );
  }

  displaySkills = () => {
    return (
      <div>
        <h2>Skills</h2>
        <h3>Python</h3>
        <div className="skill-row">
          <OnVisible
            className="skill-row-percent-python"
            percent={30}
          />
        </div>
        <h3>Java</h3>
        <div className="skill-row">
          <OnVisible
            className="skill-row-percent-java"
            percent={30}
          />
        </div>
        <h3>Web Development: JavaScript/HTML/CSS/React</h3>
        <div className="skill-row">
          <OnVisible
            className="skill-row-percent-web"
            percent={30}
          />
        </div>

      </div>
    );
  }

  displayProfile = () => {
    return (
      <div id="profile-section">
        <div id="profile-picture-container">
          <img src="src/images/vico_lee.jpg" alt="profile" id="profile-image" />
          <div>
            <h1>Vico Lee</h1>
            <p>Dartmouth College (2020-2024)</p>
            <p>Bachelor of Computer Science and Mathematics</p>
          </div>
        </div>
        <div>
          I am a Computer Science and Mathematics double major at Dartmouth College. I love the outdoors and all kinds of sports!
          Hit me up for some volleyball, frisbee, hiking, etc.
        </div>
        {this.displaySkills()}
        {this.displayContactMe()}
      </div>
    );
  }

  displayWork = () => {
    return (
      <div className="work-experiences section">
        <h2>Work Experiences</h2>
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <div>
            <div className="title-container">
              <div>
                <p>
                  Lynch Rocket Lab,
                  <em>&nbsp; Hanover, NH</em>
                </p>
                <p>October 2020 - February 2021</p>
              </div>
              <p>Machine Learning Research Intern</p>
            </div>
            <ul>
              <li>
                Conducted research on machine learning tools like edge detection neural networks to extract features
                of the northern lights’ plasma waves.
              </li>
              <li>
                Studied metrics for comparing plasma flow data collected from different satellite positions.
              </li>
            </ul>
          </div>
        </OnVisible>
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <div className="title-container">
            <div>
              <p>
                Coinhako,
                <em>&nbsp; Singapore</em>
                <NavLink to="/file/coinhako_testimonial">
                  <FontAwesomeIcon icon={faTrophy} role="button" tabIndex="0" className="work-icon testimonial" />
                </NavLink>
                <a href="https://github.com/Vicolee/news-telegram-bot">
                  <FontAwesomeIcon icon={faFileCode} role="button" tabIndex="0" className="work-icon" />
                </a>
              </p>
              <p>May 2020 - July 2020</p>
            </div>
            <p>Software Engineer Intern</p>
          </div>
          <ul>
            <li>
              Led the design of a telegram chatbot using Ruby on Rails web framework on Postgresql database in a Linux Server.
            </li>
            <li>
              Deployed a chatbot that scrapes and centralizes crypto news sources, sending users relevant crypto trading news updates.
            </li>
          </ul>
        </OnVisible>
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <div className="title-container">
            <div>
              <p>
                DSO National Laboratories,
                <em>&nbsp; Singapore</em>
                <NavLink to="/file/dso_internship_report">
                  <FontAwesomeIcon icon={faFileAlt} role="button" tabIndex="0" className="work-icon testimonial" />
                </NavLink>
                <a href="https://github.com/Vicolee/Artificial-Intelligence-Playground/tree/master/Fairness-GAN">
                  <FontAwesomeIcon icon={faFileCode} role="button" tabIndex="0" className="work-icon testimonial" />
                </a>
              </p>
              <p>January 2020 - March 2020</p>
            </div>
            <p>Machine Learning Research Intern</p>
          </div>
          <ul>
            <li>
              Researched on the use of Generative Adversarial Networks (GANs) to generate de-biased data that optimizes a fairness criterion, reducing machine algorithms’
              discrimination towards certain groups of people.
            </li>
            <li>
              Learned to navigate Linux server, and trained models using Tensorflow and Keras.
            </li>
          </ul>
        </OnVisible>
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <div className="title-container">
            <div>
              <p>
                Singapore Armed Forces
              </p>
              <p>January 2018 - November 2019</p>
            </div>
            <p>CSSCOM S1, Section Commander</p>
          </div>
          <ul>
            <li>
              Commanded a team of 4 to coordinate legal advisory services and surprise raids across 1,000+ servicemen,
              providing support for Military Police and Special Investigation Branch.
            </li>
            <li>
              Drafted mitigation pleas for servicemen who were accused of flouting military law, subjected to Summary Trial or Court Martial.
            </li>
          </ul>
        </OnVisible>
      </div>

    );
  }

  displayExtracurriculars = () => {
    return (
      <div className="extracurriculars section">
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <h2>Extracurriculars</h2>
          <div>
            <div className="title-container">
              <div>
                <p>
                  HackDartmouth,
                  <em> Dartmouth College</em>
                </p>
                <p>October 2020 - Present</p>
              </div>
              <p>Dev Lead</p>
            </div>
            <ul>
              <li>
                Conducted technical workshops for participants.
              </li>
              <li>
                Secured sponsorship and assisted in marketing endeavours.
              </li>
            </ul>
          </div>
        </OnVisible>
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <div>
            <div className="title-container">
              <div>
                <p>
                  DartUP,
                  <em> Dartmouth College</em>
                </p>
                <p>December 2020 - Present</p>
              </div>
              <p>Founder</p>
            </div>
            <ul>
              <li>
                Founded a program with the Magnuson Center that organizes a new kind of competition where teams are given 4 months to build a
                startup from scratch.
              </li>
            </ul>
          </div>
        </OnVisible>
        <OnVisible
          className="resume-experience"
          percent={20}
        >
          <div className="title-container">
            <div>
              <p>
                Dartmouth Formula Racing,
                <em> Dartmouth College</em>
              </p>
              <p>September 2020 - January 2020</p>
            </div>
            <p>Member</p>
          </div>
          <ul>
            <li>
              Programmed torque commands in C, built a firewall, and learnt to weld for the racing car.
            </li>
          </ul>
        </OnVisible>
      </div>
    );
  }

  displayProjects = () => {
    return (
      <div className="projects section">
        <h2>Projects</h2>
        <div className="projects-carousel-container">
          <FontAwesomeIcon icon={faAngleLeft} role="button" tabIndex="0" className="icon prev" />
          <div className="container">
            <div className="carousel">
              <div className="item a">
                <img src="src/images/coinhako.gif" alt="coinhako" />
                <a href="https://github.com/Vicolee/news-telegram-bot">
                  <div className="project-description">
                    <h3>Coinhako Internship</h3>
                    <p>
                      Created an entire project and independently engineered a telegram chatbot
                      using Ruby and Ruby on Rails framework.
                    </p>
                    <p>
                      The telegram chatbot scrapes cryptocurrency news articles from
                      sources like crunchbase and sends to users respectively.
                    </p>
                  </div>
                </a>
              </div>
              <div className="item b">
                <img src="src/images/dso.png" alt="dso" />
                <a href="https://github.com/Vicolee/Artificial-Intelligence-Playground/tree/master/Fairness-GAN">
                  <div className="project-description">
                    <h3>
                      DSO National Laboratories
                      <br />
                      Internship
                    </h3>
                    <p>
                      Researched on the use of Generative Adversarial Networks (GANs) to generate de-biased data that optimizes a fairness
                      criterion, reducing machine algorithms’ discrimination towards certain groups of people.
                    </p>
                    <p>
                      Learned to navigate Linux server, and trained models using Tensorflow and Keras.
                    </p>
                  </div>
                </a>
              </div>
              <div className="item c">
                <img src="src/images/cisco.gif" alt="recycle app" />
                <a href="https://github.com/Vicolee/recycle-mobile-app">
                  <div className="project-description">
                    <h3>Cisco Webex Hackathon 2020</h3>
                    <p>
                      Led a team of 3 to develop a Flutter mobile app with Dart that tells you whether an object is recyclable and which recycling bin
                      to throw it into.
                    </p>
                    <p>
                      Scraped images using Flickr API and trained the neural network using Tensorflow & Keras.
                    </p>
                  </div>
                </a>
              </div>
              <div className="item d">
                <img src="src/images/ibm.png" alt="ibm" />
                <a href="https://github.com/Vicolee/chinese-restaurants-new-york">
                  <div className="project-description">
                    <h3>IBM Data Science Professional Certificate</h3>
                    <p>
                      Conducted data analysis to predict prime venues in New York for setting up Chinese restaurants using
                      machine learning algorithms like K Nearest Neighbors, Decision Tree, Support Vector Machine,
                      and Logistic Regression.
                    </p>
                    <p>
                      Used Foursquare API to scrape data like number of likes for a venue and one hot encoded their surrounding
                      venues as a feature vector.
                    </p>
                  </div>
                </a>
              </div>
              <div className="item e">
                <img src="src/images/lynch_rocket_lab.jpeg" alt="lynch rocket lab" />
                <a href="https://sites.dartmouth.edu/lynch-rocket-lab/">
                  <div className="project-description">
                    <h3>Lynch Rocket Lab, Dartmouth</h3>
                    <p>
                      Conducted research on extracting features from satellite data taken from the auroras. These features were used to compare
                      the data taken from different satellites to predict whether the data belonged to the same northern light arc.
                    </p>
                    <p>
                      Used edge detection algorithms like holistically nested edge detection and clustering algorithms like Linear Support Vector
                      Classification to extract and engineer features for comparing different satellite data.
                    </p>
                  </div>
                </a>
              </div>
              <div className="item f">
                <img src="src/images/resumov.gif" alt="resumov" />
                <a href="https://github.com/dartmouth-cs52-21S/project-access">
                  <div className="project-description">
                    <h3>Resumov</h3>
                    <p>
                      Led a team of 5 to create a web application that allows users to input content from their resume to
                      generate a personal portfolio website.
                    </p>
                    <p>
                      Built the entire backend independently, implemented image storage using Amazon S3 services, used
                      netlify to deploy, and MongoDB as backend.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <FontAwesomeIcon icon={faAngleRight} role="button" tabIndex="0" className="icon next" />
        </div>

      </div>
    );
  }

  displayMain = () => {
    return (
      <div id="main-section">
        {this.displayWork()}
        {this.displayExtracurriculars()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="home-header">
          {this.displayProjects()}
        </div>
        <div className="home">
          <div className="profile-container">
            {this.displayProfile()}
          </div>
          <div className="main-container">
            {this.displayMain()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
