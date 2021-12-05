/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-filename-extension */
import '../styles/style.scss';
import '../styles/home.scss';
import React, { useEffect } from 'react';
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

const Home = (props) => {
  useEffect(() => {
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
  }, []);

  const displayContactMe = () => {
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
  };

  const displaySkills = () => {
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
  };

  const displayProfile = () => {
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
            I am a sophomore at Dartmouth College, double majoring in Computer Science and Mathematics.
            My passion lies in software engineering, data science, machine learning, tech and startups.
            Outside of classes, I participate in hackathons and pitch competitions. I also enjoy working on personal projects and
            meeting new people.
          </div>
          <br />
          <div>
            Feel free to reach out to me to talk about anything!
          </div>
        </div>
        {displaySkills()}
      </div>
    );
  };

  const displayWork = () => {
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
                    Crimson Education,
                    <em>&nbsp;San Francisco, CA</em>
                  </p>
                  <p>July 2021 - September 2021</p>
                </div>
                <p>Data Science Intern</p>
              </div>
              <ul>
                <li>
                  Worked directly under the Chief Operating Officer to run business health analysis and data analysis for 20+ offices globally.
                </li>
                <li>
                  Developed SQL queries to join 10+ data collections and parse 1,000,000+ user reviews to evaluate 600+ employees’ KPIs.
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
                <p>Data Science Research Assistant</p>
              </div>
              <ul>
                <li>
                  Created a tool to automate the comparison of northern light images by quantifying features such as degree of curvature.
                </li>
                <li>
                  Boosted existing edge detection algorithm’s accuracy by 100% and decreased image noise by 80%, reducing overall human supervision by 80%.
                </li>
                <li>
                  Overarching project was selected by NASA as a top 4 candidate for future space missions.
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
                Designed and deployed a Telegram chatbot in a Linux Server using Ruby on Rails web framework and Postgresql database.
              </li>
              <li>
                Chatbot automatically compiles news from 10+ reliable sources and creates personalized feeds for 12,000+ traders.
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
                Researched the generation of de-biased datasets with
                Generative Adversarial Networks built using Tensorflow.
              </li>
              <li>
                Trained model to gauge faces’ attractiveness independent of features like skin color and gender.
              </li>
              <li>
                Created image-cropping algorithm to pre-process 200,000+ celebrity images.
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
  };

  const displayExtracurriculars = () => {
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
              <p>Founder & Chairperson</p>
            </div>
            <ul>
              <li>
                Founded a club of 10 that organizes lean startup competitions, raising $5,000 of initial funding in the process.
              </li>
              <li>
                Spearheading sponsorship, marketing, club recruitment, and workshop planning efforts in collaboration with 10+ clubs.
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
                Led 10 club members to secure $15,000 worth of sponsorship prizes from software firms for 600+ participants worldwide.
              </li>
              <li>
                Organized workshops on campus to teach beginner developers JavaScript, HTML, and CSS, etc.
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
  };

  const displayProjects = () => {
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
                      Scikit-learn machine learning models like K Nearest Neighbors, Decision Tree, Support Vector Machine,
                      and Logistic Regression.
                    </p>
                    <p>
                      Scraped data on existing Chinese restaurants in New York using the Foursquare API and trained machine
                      models to identify crucial venues like tourist attractions that contribute to a restaurant’s popularity.
                    </p>
                    <p>
                      Used Python, Matplotlib, and Pandas to create a data visualization of the 160 ideal locations as predicted by the model.
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
  };

  const displayMain = () => {
    return (
      <div id="main-section">
        {displayProjects()}
        {displayWork()}
        {displayExtracurriculars()}
      </div>
    );
  };

  return (
    <div>
      <div className="home">
        <div className="profile">
          <div className="profile-container">
            {displayProfile()}
          </div>
          {displayContactMe()}
        </div>
        <div className="main-container">
          {displayMain()}
        </div>
      </div>
    </div>
  );
};

export default Home;
