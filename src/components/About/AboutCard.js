import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" ,fontWeight:"bold" }}>
            Hi, I am &nbsp; <span className="purple">Rajat Payal &nbsp;</span>
            from <span className="purple"> (Rishikesh , India)</span>&nbsp;<samp> as a <b style={{color:'black'}}>Bachelor of Computer Science & Engineering</b> graduate from 
              Dev Bhoomi Institute of Technology and Engineering,
               and previously completed a <b style={{color:'black'}}>Diploma in Computer Science & Engineering</b> from Swami Rama Himalayan University my keen interest in 
              software development and collaborativeomputer
               work experience in different development stages, have made me a valuable asset to any 
               team with a methodical and analytical mindset , strong skills in various tasks and a dedication
                to continuous learning, I am committed to delivering high-quality work. </samp>
            <br /></p>
            <p style={{textAlign:"left",fontWeight:"bold",color:"black"}}> <b style={{color:'black'}}><h4> <ImPointRight /> Tranning experience :</h4></b></p><br />
<p style={{textAlign:"justify" ,fontWeight:'bold', color:'black'}}><ImPointRight /> <b style={{color:'black'}}>"Software Development Internship at Wayezi Technologies: Gaining Hands-On Experience in Modern Technologies"</b></p>
<p style={{textAlign:"justify" ,fontWeight:'bold', color:'white'}}> In Delhi, India, at Wayezi Technologies, I completed a software 
  development internship during which I received practical expertise in creating
  software applications. Leading the design and implementation of UI/UX features, 
  the CCTV module, and the Payment Gateway utilising <b style={{color:'black'}}>javascript</b>, <b style={{color:'black'}}>java</b>, and <b style={{color:'black'}}>Next.js</b> was my main duty.
  I also used <b style={{color:'black'}}>XML</b>, <b style={{color:'black'}}>CSS</b>, <b style={{color:'black'}}>JavaScript</b>, <b style={{color:'black'}}>React</b>, and <b style={{color:'black'}}>HTML</b> to develop scalable REST APIs, 
  user profile interfaces, and optimised splash screens. To construct a completely
  functional software system, I also concentrated on writing tested code and integrating software components.
  I used <b style={{color:'black'}}>Firebase RDBMS</b>, <b style={{color:'black'}}>REST API</b>, <b style={{color:'black'}}>Java</b>, <b style={{color:'black'}}>React</b>, <b style={{color:'black'}}>SQL</b>, and <b style={{color:'black'}}>Google Cloud Platform</b> as my technology stack.
  My internship overall gave me significant exposure to cutting-edge technology and software development,
  which has prepared me for my future work in this area.   </p>
  <br />
<p style={{textAlign:"justify" ,fontWeight:'bold', color:'black'}}> <ImPointRight /> <b style={{color:'black'}}>"Widya's AI Exploration: Developing Skills in Model Development and Performance Evaluation"</b></p>
<p style={{textAlign:"justify" ,fontWeight:'bold', color:'white'}}> I got the chance to work with the onboarding team at Widya during my prior Artificial Intelligence Internship, 
  which took place from January 2021 to March 2021. During that time, I also obtained practical experience creating AI
  models using contemporary technology. My primary duties were using <b style={{color:'black'}}>RapidMiner</b> to create models, building workflows 
  to increase the effectiveness of AI operations, and choosing the <b style={{color:'black'}}>Apriori Algorithm</b> (support and confidence) 
  for association rule derivation. To reach <b style={{color:'black'}}>90-95 percent</b> model evaluation efficiency, I additionally ran tests 
  and model tuning. I also collaborated with team members when developing models, preparing data, and assessing performance, tech stack use 
  <b style={{color:'black'}}>Python</b>, <b style={{color:'black'}}>R</b>, <b style={{color:'black'}}>SQL</b>, <b style={{color:'black'}}>XML</b>, and machine learning methods made up my technological stack </p>
<br />
 <p style={{textAlign:"justify" ,fontWeight:'bold', color:'black'}}>  <ImPointRight />Software Development Internship - Full-Stack App Development with ASCITECHNO.  </p>
 <p style={{textAlign:"justify", fontWeight:'bold', color:'white'}}>
From June 2019 to August 2019, I worked on a project called <b style={{color:'black'}}>Attendance Management Application</b> 
as part of my Software Development Internship at <b style={{color:'black'}}>ASCITECHNO</b> in Dehradun, India. As part of my responsibilities,
I planned and built a full-stack Android app, optimised it for performance, and cooperated with team members
to ensure smooth functionality. I used a mix of technologies to accomplish this, including <b style={{color:'black'}}>SQLite Database</b>,
<b style={{color:'black'}}>Adobe XD</b>, <b style={{color:'black'}}>Flutter for IOS</b>, <b style={{color:'black'}}>Firebase</b>, and <b style={{color:'black'}}>Java</b>. In addition, I used cloud services such as <b style={{color:'black'}}>Firebase RDBMS</b> 
and <b style={{color:'black'}}>Amazon Web Services (AWS)</b> to enable seamless connectivity with the application's backend. Overall,
this experience taught me a lot about full-stack programming and prepared me for future prospects in this exciting sector.
</p><br />

<p style={{textAlign:"left",fontWeight:"bold",color:"black"}}> <b style={{color:'black'}}><h4> <ImPointRight /> Certifications :</h4></b></p><br />
<p style={{textAlign:"left",fontWeight:"bold",color:"black"}}>1. Data Analytics Professional Certiﬁcate : <span style={{textAlign:"left",fontWeight:"bold",color:"white"}}>Comprehensive training in data analytics with Google tools, covering
data collection, analysis, and visualization, and providing hands-on experience.</span></p>

<p style={{textAlign:"left",fontWeight:"bold",color:"black"}}>2. ASCITECHNO HUB Android App Development Certiﬁcation :<span style={{textAlign:"left",fontWeight:"bold",color:"white"}}> A+ grade with training from a reputable provider.</span></p>

<p style={{textAlign:"left",fontWeight:"bold",color:"black"}}>3. Data Science & MA :<span style={{textAlign:"left",fontWeight:"bold",color:"white"}}> Application in Health, Technology & Business from Nottingham Trent University</span></p>
<br />
<p style={{textAlign:"left",fontWeight:"bold",color:"black"}}> <b style={{color:'black'}}><h4> <ImPointRight /> My strength :</h4></b></p><br />


<span> <li className="about-activity" style={{fontWeight:'bold'}}>
  <ImPointRight /> Teamwork, Dedicated, Result Oriented, Logical, Analytic skills , Problem solving 
</li>
<li className="about-activity" style={{fontWeight:'bold'}}>
              <ImPointRight /> yoga , Football , Swimming 
            </li></span>







            
        

          <p style={{ color: "black", fontWeight:'bold' }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"><b style={{color:'black'}}>Rajatpayal</b></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
