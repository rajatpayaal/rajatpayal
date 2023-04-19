import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiShadow } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em"  }}>
              Let me  <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
            i am computer science graduate my keen interest in software development and collaborative work 
experience in different development stages, have made me a valuable asset to any team with a methodical
and analytical mindset , strong skills in various tasks and a dedication to continuous learning,
I am committed to delivering high-quality work.
              <br />
              <br />I am fluent in classics Software Languages like &nbsp;
              
                <b className="purple">   
                JAVA, Javascript and Python. </b>
              
              <br />
              <br />
              My field of Interest's are building &nbsp;
              
                <b className="purple">Android devlopment , Web Technologies using javaScript </b> and
                {" "}
                <b className="purple">
                 Data Analytics.
                </b>
              
              <br />
              <br />
              
                  <b>Software Platforms/library: </b> &nbsp; Android SDK , Android Studio, Gradle, Git(version controle), MVC, MVP, MVVM, 
RESTful APIs, JSON, Material Design, Firebase, Retrofit, Gradle, Java Collections, Java Swing
               
              
              &nbsp; like
              
                <b className="purple"> React.js and Next.js</b>
              
            </p>
          </Col>
          {/* avtar code */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rajatpayaal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rajatpayaal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://in.linkedin.com/in/rajatpayaal"
                  // target="_blank"
                  // rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rajat_payaal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
