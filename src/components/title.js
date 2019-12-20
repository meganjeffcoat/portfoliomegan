import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import photo from "../assets/images/photo.jpg";

const Container = styled.section`
  width: 99.8%;
  height: auto;
  background-color: #313630 0.9;
  color: #fbfbf8;
`;

const Name = styled.div`
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 23% 0;
  color: #fbfbf8;
  font-family: "Poppins", sans-serif;

  h1 {
    margin-top: 5%;
    width: 50%;
    margin-left: 25%;
    font-size: 2.5rem;
    font-weight: 900;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  }

  p {
    margin-top: -2%;
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

const Icons = styled.div`
  width: 30%;
  margin-top: -23%;
  margin-left: 35%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Arrow = styled.div`
  margin-top: -5%;
  margin-bottom: 5%;

  p {
    margin-bottom: -0.2%;
  }

  a{
    text-decoration: none;
    color: #fbfbf8;
  }
`;

const About = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #21b2a6;
  color: #fbfbf8;

  img {
    border-radius: 50%;
    margin: 2%;
  }

  p {
    margin-top: 5%;
  }
`;


function Title() {
  return (
    <>
      <Container>
        <Name>
          <h1>MEGAN JEFFCOAT</h1>
          <p>FULL STACK WEB DEVELOPER</p>
        </Name>
        <Icons>
          <a href="mailto:jeffcoat.megan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} color={"#fbfbf8"} size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/megan-jeffcoat-b46b8287/">
            <FontAwesomeIcon icon={faLinkedin} color={"#fbfbf8"} size="3x" />
          </a>
          <a href="https://twitter.com/_MeggieMae12">
            <FontAwesomeIcon icon={faTwitter} color={"#fbfbf8"} size="3x" />
          </a>
        </Icons>
        <Arrow>
          <a href='#about'>
            <p>Learn More</p>
            <FontAwesomeIcon icon={faArrowDown} color={"#fbfbf8"} />
          </a>
        </Arrow>
      </Container>
      <About id='about'>
        <img src={photo} alt="Megan Jeffcoat" />
        <p>I am a full stack web developer currently living in Killeen, TX. </p>
      </About>
    </>
  );
}

export default Title;
