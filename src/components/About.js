import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

// import profilePic from "../assets/images/profilepic.jpg";
import profileVic from "../assets/images/profile-vic.png";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profileVic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I'm a self-taught coder who's passionate about technology. After
          learning my first language Swift on youTube, I've continued to learn
          new languages and frameworks to put new ideas into action.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Victor Lee</span>
              <br />
              <span>
                790 Yishun Ave 2
                <br /> Singapore, 760790
              </span>
              <br />
              <span>(65)98002795</span>
              <br />
              <span>myleevictor@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
