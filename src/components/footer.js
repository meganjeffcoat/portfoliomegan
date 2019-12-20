import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
  height: auto;
  background-color: #313630CC;
  color: #fbfbf8;
  padding: 1%;
`;

const Icons = styled.div`
width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 40%;
`;

function Footer() {
  return (
    <Container>
        <p>© Megan Jeffcoat | Design inspiration HTML5 UP</p>
      <Icons>
        {" "}
        <a href="https://github.com/meganjeffcoat">
          <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/megan-jeffcoat-b46b8287/">
          <FontAwesomeIcon icon={faLinkedin} color={"#fbfbf8"} size="2x" />
        </a>
        <a href="https://twitter.com/_MeggieMae12">
          <FontAwesomeIcon icon={faTwitter} color={"#fbfbf8"} size="2x" />
        </a>
        <a href="mailto:jeffcoat.megan@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} color={"#fbfbf8"} size="2x" />
        </a>
      </Icons>
    </Container>
  );
}

export default Footer;
