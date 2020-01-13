import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import photo from "../assets/images/photo.jpg";

const Container = styled.section`
  width: 99.9%;
  height: auto;
  background-color: #31363073;
  color: #fbfbf8;
  padding-bottom: 5%;

  @media (max-width: 800px) {
    background-color: #313630BA;
  }

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

  @media (max-width: 800px) {
    h1 {
      width: 100%;
      margin-left: 0;
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      width: 100%;
      margin-left: 0;
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
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

  @media (max-width: 800px) {
    .icon {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
    .icon {
      font-size: 1.5rem;
    }
  }
`;

const Arrow = styled.div`
  margin-top: -5%;
  margin-bottom: 5%;

  p {
    margin-bottom: -0.2%;
  }

  .link {
    text-decoration: none;
    color: #fbfbf8;
    padding-bottom: 3%;
  }
`;

const About = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #21b2a6;
  color: #fbfbf8;
  margin-top: -5%;


  img {
    border-radius: 50%;
    margin: 2% 2.5% 2% 10%;
  }

  p {
    margin: 4% 10% 2% 2.5%;
    padding-top: 2%;
    text-align: justify;

  }

  @media (max-width: 800px) {
    flex-direction: column;

    img {
      margin: 3% 4% 0 40%;
      width: 20%;
    }

    p {
      margin: 1% 4% 5% 4%;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    img {
      margin: 3% 4% 2.5% 25%;
      width: 50%;
    }

    p {
      margin: 2.5% 4% 3% 4%;
      text-align: center;
    }
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
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
              color={"#fbfbf8"}
              size="3x"
            />
          </a>
          <a href="https://www.linkedin.com/in/mjeffcoat/">
            <FontAwesomeIcon
              className="icon"
              icon={faLinkedin}
              color={"#fbfbf8"}
              size="3x"
            />
          </a>
          <a href="https://twitter.com/_MeggieMae12">
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
              color={"#fbfbf8"}
              size="3x"
            />
          </a>
        </Icons>
        <Arrow>
          <AnchorLink className="link" href="#about">
            <p>Learn More</p>
            <FontAwesomeIcon icon={faArrowDown} color={"#fbfbf8"} />
          </AnchorLink>
        </Arrow>
      </Container>
      <About id="about">
        <img src={photo} alt="Megan Jeffcoat" />
        <p>
          Full stack web developer currently living in Killeen, TX <br />
          I hold importance to the fundamentials. The fundamentials open more
          doors and allow you to easily learn a new programming language <br />
          I have a great love for front end development as well as design that
          has grown over time <br />
        </p>
      </About>
    </>
  );
}

export default Title;
