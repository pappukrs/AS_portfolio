import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/alka.png"
            alt="alka-png"
          />
           {/* <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          /> */}
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Alka Sharma</strong>. I'm from  <strong>Bhilai  Chhattisgarh </strong> and I have completed <strong>B.Tech in Information Technology </strong> from  <strong>Bhilai Institute of technology Durg </strong>  . During College time I have done some internship and  gained valuable experience through various Projects, which greatly enhanced my work ethic, communication skills, and adaptability and Team Work.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            During my <strong>internship at BSP </strong>, I developed an online printer cartridges shopping website using ReactJS and Strapi CMS, gaining valuable learning experiences in web development. In another <strong>internship at Codsoft</strong>, I honed my skills by creating a Calculator and Landing page, becoming proficient in HTML, CSS, and JavaScript. This hands-on experience enabled me to design and build responsive web interfaces, reinforcing my understanding of front-end development principles.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I have worked on several diverse projects demonstrating my expertise in various technologies. <strong>Firstly,</strong> I designed and implemented a smart railway crossing system that senses and transmits railway barrier activity, enhancing the transportation infrastructure by providing timely information for informed route choices. This project showcased my skills in IoT integration and utilizing cloud-based platforms. <strong>Secondly </strong>, I created a Netflix clone to replicate the original platform's design and user experience. This project highlighted my front-end development skills, as I accurately reproduced features and interface elements, improving my responsive design and UI capabilities. <strong>Lastly</strong>, I developed a responsive weather web app that forecasts the weather for cities using real location detection and city name input. The app provides both today's weather and a six-day forecast, demonstrating my ability to create functional and appealing web applications.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
