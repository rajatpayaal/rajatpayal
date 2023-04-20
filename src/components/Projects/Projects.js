import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/iot.png";
import emotion from "../../Assets/Projects/da.png";
import editor from "../../Assets/Projects/att.png";
import chatify from "../../Assets/Projects/simplle.png";
import suicide from "../../Assets/Projects/kmean.png";
import bitsOfCode from "../../Assets/Projects/movi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          <b>Here are a few projects I've worked on recently.</b>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Simple_notes"
              description="Simple_notes:
            People have a busy schedule, we care for to forget many important 
              things easily, and to remember these things we need to note down
               things in a piece of paper. In such busy schedules people need 
              some personal assistant or a reminder to remind by use of this 
              application them about the important work that needs to be done."



              ghLink="https://github.com/rajatpayaal/Simple_Notes.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restro_application"
              description="The purpose of iot based restaurant management application is to automate the existing physical structure by the help of automated apparatus and full-fledged computer software, satisfying their requirements, so that their appreciated data/information can be deposited for a longer stage with easy retrieving and guidance of the identical.1. implemented User Registration and Authentication, Payment Processing,and Restaurant Food Data using 
              Cloud-Based RESTful API , Designed an optimized UI/UX using Adobe XD . 
              3.Implemented IoT code using C++ and Arduino microcontrollers for hardware integration."
              ghLink="https://github.com/rajatpayaal/IOT-Restro-app.git"
              // demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Capstone(Data Analytics)"
              description="Organizations of all kinds need data analysts
              to help them improve their processes,
              identify opportunities and trends, launch
              new products, and make thoughtful
              decisions. In this course, you’ll be 
             introduced to the world of data analytic
             s through hands-on curriculum developed by Google.
              The material shared covers plenty of key data analytics topics"
              ghLink="https://github.com/rajatpayaal/google_data_analytics.git"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Attendance Management Application"
              description="An Attendance Management Application is a software tool used to track and manage the attendance of employees or students. The application typically allows users to record attendance data in real-time, generate reports on attendance trends, and manage exceptions, such as sick leave or vacation days. Some applications may also integrate with biometric or RFID devices to automate the process of capturing attendance data. The data collected can be used for payroll processing and other HR-related tasks"
              ghLink="https://github.com/rajatpayaal/Student_Attendace.git"
              // demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie-recommendation-using-python"
              description="Movie-recommendation-using-python is a Python program that uses collaborative filtering to recommend movies to users based on their past ratings and the ratings of other similar users. The program first calculates similarity scores between users and then predicts ratings for movies that the user has not yet seen. The predicted ratings are then used to generate a list of recommended movies for the user. The program can be trained on a dataset of movie ratings, such as the MovieLens dataset."
              ghLink="https://github.com/rajatpayaal/Movie-recommendation-using-python.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI-1D-kmean-clusters-3-by-python"
              description="AI-1D-kmean-clusters-3-by-python is a Python program that uses the k-means clustering algorithm to group a one-dimensional dataset into three clusters. The algorithm iteratively partitions the data into clusters by minimizing the sum of squared distances between each point and its assigned centroid. The resulting clusters can be visualized with a scatter plot"
              ghLink="https://github.com/rajatpayaal/AI-1D-kmean-clusters-3-by-python.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
