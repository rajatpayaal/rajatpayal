import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}> */}
            {/* Hi Everyone, I am <span className="purple">Rajat Payal </span>
            from <span className="purple"> Rishikesh , India.</span>
            <br />I am pursuing Btech in computer science engineering 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
           

            <br />
      


            <ImPointRight /> Work Experiences Software Development Internship<br /><br />
Wayezi Technologies ( 7 months ) <br />
1. Collaborated with Wayezi to design UI/UX , Payment Gateway and features using javascript/java.<br />
2. Implemented optimized splash screen and scalable REST APIs for improve performance.<br />
3.Developed user profile interface using XML for a seamless user experience.<br />
4. Responsibilities : Writing testable code and integrating software components into functional systems..<br />
6. Tech stack: Firebase RDBMS, RESTful APIs, JAVA, React, SQL, Google Cloud Services<br />
( Jun 2020 - Dec 2020) , Delhi,India)<br />
<br />
<ImPointRight /> Artificial Intelligence Internship <br /> <br />
Widya ( 3 months ) <br />
1. improved AI processes’efficiency as an AI intern with the onboarding team.<br />
2. Florished workflows using RapidMiner for model development and performance evaluation.<br />
3. Achieved 90-95% efficacy via Apriori Algorithm for association rule derivation, tuning, and testing.<br />
4. Responsibilities: Preprocessing data, Developing models, Evaluating performance, Collaborating with team.<br />
Tech stack: Python, R, SQL, XML, Machine learning algorithm
( Jan 2020 - Mar 2021) , Remote)
<br />
<ImPointRight /> Software Development Internship <br /><br />
ASCITECHNO (3 months )<br />
(Project name: Attendance Management Application)<br />
1. Designed and developed a full-stack application , Responsibilities includes app development ,optimization<br />
 and collaboration with team members , Utilization Firebase (RDBMS) and AWS cloud services.<br />
2. Tech stack: SQLite Database, Adobe XD, Flutter(IOS), Firebase, Java<br />
<br /><br />
My strength :

<br />
<li className="about-activity">
  <ImPointRight /> Teamwork, Dedicated, Result Oriented, Logical, Analytic skills , Problem solving 
</li>
<li className="about-activity">
              <ImPointRight /> yoga , Football , Swimming 
            </li>






            
            
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rajatpayal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
