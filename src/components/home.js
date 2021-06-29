/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../styles/style.scss';
import '../styles/home.scss';
import $ from 'jquery';
import {
  FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin, FaAngleDoubleDown, FaAngleRight, FaAngleLeft, FaRegFileCode, FaTrophy, FaRegFileAlt,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-scroll';
import OnVisible from 'react-on-visible';
import {
  NavLink,
} from 'react-router-dom';
import coinhako from '../images/coinhako.gif';
import cisco from '../images/cisco.gif';
// import dso from '../images/dso.png';
// import ibm from '../images/ibm.png';
import resumov from '../images/resumov.gif';
// import lynchRocketLab from '../images/lynch_rocket_lab.jpeg';

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
      <div className="contact-container">
        {/* <h2>Contact Me</h2> */}
        <p>vicoleezy@gmail.com</p>
        <div>
          <a href="mailto:vicoleezy@gmail.com">
            <SiGmail className="contact-icon gmail" />
          </a>
          <a href="https://github.com/Vicolee">
            <FaGithub className="contact-icon github" />
          </a>
          <a href="https://www.linkedin.com/in/vicolee/">
            <FaLinkedin className="contact-icon linkedin" />
          </a>
          <a href="https://www.facebook.com/vico.lzy/">
            <FaFacebookSquare className="contact-icon facebook" />
          </a>
          <a href="https://www.instagram.com/vicoolee/">
            <FaInstagram className="contact-icon instagram" />
          </a>
        </div>
      </div>
    );
  }

  displaySkills = () => {
    return (
      <div className="skills-section">
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
        <h3>Full Stack Web Development: JavaScript/HTML/CSS</h3>
        <div className="skill-row">
          <OnVisible
            className="skill-row-percent-web"
            percent={30}
          />
        </div>
        <h3>Ruby / Ruby on Rails</h3>
        <div className="skill-row">
          <OnVisible
            className="skill-row-percent-ruby"
            percent={30}
          />
        </div>
      </div>
    );
  }

  displayProfile = () => {
    return (
      <div id="profile-section">
        <div>
          <div id="profile-picture-container">
            <img src="https://i.ibb.co/B4GQ38N/vico-lee.jpg" alt="Vico Lee" id="profile-image" />
            <div>
              <h1>Vico Lee</h1>
              <p>Dartmouth College (2020-2024)</p>
              <p>Bachelor's of Computer Science and Mathematics</p>
            </div>
          </div>
          <div>
            I am a Computer Science and Mathematics double major at Dartmouth College. I am an aspiring software engineer, data scientist, and entrepreneur.
            Outside of classes, I participate in hackathons and pitch competitions. I am an independent learner and believe strongly in effective communication.
            Beyond these, I love playing sports, especially volleyball and frisbee!
          </div>
          <br />
          <div>
            Feel free to reach out to me if you want to work on projects together, play some sports together, or even just
            to grab a cup of coffee!
          </div>
        </div>
        {this.displaySkills()}
      </div>
    );
  }

  displayWork = () => {
    return (
      <div className="work-experiences section">
        <div className="work-experiences-container">
          <h2>Work Experiences</h2>
          <OnVisible
            className="resume-experience"
            percent={20}
          >
            <div>
              <div className="title-container">
                <div>
                  <p>
                    Reality and Robotics Lab,
                    <em>&nbsp;Hanover, NH</em>
                  </p>
                  <p>June 2021 - Present</p>
                </div>
                <p>E.E. Just Summer Intern</p>
              </div>
              <ul>
                <li>
                  E.E Just Summer Intern program is a special program at Dartmouth aimed at increasing interest in STEM fields among underrepresented groups.
                </li>
                <li>
                  Conducting research to optimize information transmitted between robots underwater using 3D simulations like Gazebo.
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
                    Lynch Rocket Lab,
                    <em>&nbsp;Hanover, NH</em>
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
                  <em>&nbsp;Singapore</em>
                  <NavLink to="/files/coinhako_testimonial">
                    <FaTrophy className="work-icon testimonial" />
                  </NavLink>
                  <a href="https://github.com/Vicolee/news-telegram-bot">
                    <FaRegFileCode className="work-icon" />
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
                  <em>&nbsp;Singapore</em>
                  <NavLink to="/files/dso_internship_report">
                    <FaRegFileAlt className="work-icon" />
                  </NavLink>
                  <a href="https://github.com/Vicolee/Artificial-Intelligence-Playground/tree/master/Fairness-GAN">
                    <FaRegFileCode className="work-icon" />
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
        <div className="arrow-container">
          <Link
            activeClass="active"
            to="extracurriculars section"
            spy
            smooth
            offset={-70}
            duration={1000}
          >
            <FaAngleDoubleDown className="arrow-icon" />
          </Link>
        </div>
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
                  DartUP,
                  <em>&nbsp;Dartmouth College</em>
                </p>
                <p>December 2020 - Present</p>
              </div>
              <p>Founder</p>
            </div>
            <ul>
              <li>
                Founded a program with the Magnuson Center for Entrepreneurship at Dartmouth that organizes a new kind of competition where teams are given 4 months to build a
                startup from scratch.
              </li>
              <li>
                Spearheading sponsorship, marketing, club recruitment, technical workshops, and competition planning efforts.
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
                  HackDartmouth,
                  <em>&nbsp;Dartmouth College</em>
                </p>
                <p>October 2020 - Present</p>
              </div>
              <p>Sponsorship Lead</p>
            </div>
            <ul>
              <li>
                Leading a team of 10 to secure sponsorships from software firms for 600+ participants worldwide.
              </li>
              <li>
                Responsible for holding workshops on campus to teach beginner developers languages like JavaScript, HTML, and CSS.
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
                International Student Association,
                <em>&nbsp;Dartmouth College</em>
              </p>
              <p>June 2021 - Present</p>
            </div>
            <p>Head Secretary</p>
          </div>
          <ul>
            <li>
              As part of the executive committee, I lead advocacy movements for Dartmouth's international students.
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
                Dartmouth Formula Racing,
                <em>&nbsp;Dartmouth College</em>
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
          <FaAngleLeft className="icon prev" />
          <div className="container">
            <div className="carousel">
              <div className="item a">
                {/* <img src="https://i.postimg.cc/fkzM9y3D/coinhako.gif" alt="coinhako" /> */}
                <img src={coinhako} alt="coinhako" />
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
                <img src="https://i.ibb.co/FsLMFj9/dso.png" alt="dso" />
                {/* <img src={dso} alt="dso" /> */}
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
                {/* <img src="https://i.postimg.cc/FYcMqXfT/cisco.gif" alt="recycle app" /> */}
                <img src={cisco} alt="recycle app" />
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
                <img src="https://i.ibb.co/X4y7wRT/ibm.png" alt="ibm" />
                {/* <img src={ibm} alt="ibm" /> */}
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
                <img src="https://i.ibb.co/grymn7W/lynch-rocket-lab.jpg" alt="lynch rocket lab" />
                {/* <img src={lynchRocketLab} alt="lynch rocket lab" /> */}
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
                {/* <img src="https://i.ibb.co/Mk53BF6/resumov.gif" alt="resumov" /> */}
                <img src={resumov} alt="resumov" />
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
          <FaAngleRight className="icon next" />
        </div>
        <div className="arrow-container">
          <Link
            activeClass="active"
            to="work-experiences section"
            spy
            smooth
            offset={-70}
            duration={1000}
          >
            <FaAngleDoubleDown className="arrow-icon" />
          </Link>
        </div>
      </div>
    );
  }

  displayMain = () => {
    return (
      <div id="main-section">
        {this.displayProjects()}
        {this.displayWork()}
        {this.displayExtracurriculars()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="home">
          <div className="profile">
            <div className="profile-container">
              {this.displayProfile()}
            </div>
            {this.displayContactMe()}
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
