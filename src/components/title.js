import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";
import title from "../assets/images/code.png";

const Container = styled.section`
  margin-top: -28%;
  width: 99.8%;
  height: auto;
  border: 1px solid black;
  background-image: url(${title});
  background-size: cover;
`;

const Name = styled.div`
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 23% 0;
  color: #fbfbf8;
  font-family: "Poppins", sans-serif;

  h1 {
    padding: 3% 0;
    font-size: 3rem;
    font-weight: 800;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  }

  p {
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

const Icons = styled.div`
    width: 30%;
    margin-top: -10%;
    margin-left: 35%;
    padding-bottom: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

function Title() {
  return (
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
    </Container>
  );
}

export default Title;
