import React from "react";
import { FaLinkedin, FaGithub,FaWhatsapp } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #151418;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  var phoneNumber = '+919691739594';
  var defaultMsg = 'Hi Alka, I want to chat with you with respect to software development';


  const handleWhatsAppClick = () => {
    // Replace '1234567890' with your WhatsApp phone number
    const phoneNumber = '+919691739594';
    // Replace 'Hi Pappu, I want to chat with you with respect to software development' with your default message
    const defaultMsg = 'Hi Alka, I want to chat with you with respect to software development';
    // Construct the WhatsApp API link with the default message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURI(defaultMsg)}`;
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };



  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="http://www.linkedin.com/in/alka-sharma-590a5b201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.github.com/Alkasharma2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="item">
           <a href={ `https://wa.me/${phoneNumber}?text=${encodeURI(defaultMsg)}`} target="_blank"  rel="noopener noreferrer">
              <FaWhatsapp   onClick={handleWhatsAppClick}/>
              </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
