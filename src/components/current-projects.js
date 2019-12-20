import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";


import stampd from "../assets/images/stampd.png";
import project from "../assets/images/projectweek.png";
import notes from "../assets/images/notes.png";
import safe from "../assets/images/safespace.png";

const Section = styled.section`
  margin-top: -2%;
  background-color: #2b343e;
  color: #fbfbf8;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
    padding-top: 2%;
  }
`;

const CurrentOne = styled.div`
  background-color: #2b343e;
  display: flex;
  flex-direction: row;


  img {
    width: 50%;
    margin: 1.5%;
    height: 350px;
  }

  div {
    width: 50%;
    flex-direction: column;
    margin: 1.5%;
    color: #fbfbf8;
    padding-top: 3%;
  }
`;
const CurrentTwo = styled.div`
  background-color: #2b343e;
  display: flex;
  flex-direction: row-reverse;

  img {
    width: 50%;
    margin: 1.5%;
    height: 350px;
  }

  div {
    width: 50%;
    flex-direction: column;
    margin: 1.5%;
    color: #fbfbf8;
    padding-top: 3%;
  }
`;

// const Icons = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin: 1%;
//   width: 100%;

//   div {
//     margin: 5%;
//   }
// `;

function CurrentProjects() {
  return (
    <Section>
      <h1>Projects</h1>
      <CurrentOne>
        <img src={stampd} alt="Stampd" />
        <div>
          <h2>Stampd</h2>
          <p>
            Stampd allows you to keep track of your credentials. Your
            institution will upload the credential where it will be held in the
            blockchain. You can access your credential with your account and add
            multiple email addresses that you may have your credentials under.
          </p>
          <a href="https://github.com/labs14-stampd">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a> {" "}
          <a href="https://www.stampdcert.com/">
          <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentOne>
      <CurrentTwo>
<img src={project} alt="S&J" />
        <div>
          <h2>S&J Architects</h2>
          <p>
            A responsive modern architecture website Built with HTML, CSS and
            ES6 JavaScript
          </p>
          <a href="https://github.com/meganjeffcoat/User-Interface-Project-Week">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a> {" "}
          <a href="https://distracted-brown-222a45.netlify.com/">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentTwo>
      <CurrentOne>
        <img src={notes} alt="Note" />
        <div>
          <h2>Notes</h2>
          <p>
            A place to keep notes and the ability to update and remove them Made
            using React, Redux and Styled Components
          </p>
          <a href="https://github.com/meganjeffcoat/front-end-project-week">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a> {" "}
          <a href="https://infallible-nightingale-04222d.netlify.com/">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentOne>
      <CurrentTwo>
        <img src={safe} alt="safe space" />
        <div>
          <h2>Safe Space</h2>
          <p>
            Send yourself a positive text and brighten your day Built by a team
            of five, my focus was on the backend Utilizing express node and
            twillio for the messaging service
          </p>
          <a href="https://github.com/safespaceteam/safespacebackend">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a> {" "}
          <a href="https://safespaceteam.github.io/safespaceuim/#">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentTwo>
    </Section>
  );
}

export default CurrentProjects;
