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

  @media (max-width: 800px) {
    margin-top: -6%;
    
  }

  @media (max-width: 500px) {
    margin-top: -5%;

    h1 {
      padding-top: none;
      font-size: 1.6rem;
    }
  }
`;

const CurrentOne = styled.div`
  background-color: #2b343e;
  display: flex;
  flex-direction: row;

  .visit {
    width: 50%;
    margin: 1.5%;
    height: 350px;

    img {
      width: 100%;
      height: 350px;
    }
  }

  div {
    width: 50%;
    flex-direction: column;
    margin: 1.5%;
    color: #fbfbf8;
    padding-top: 3%;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .visit {
      width: 95%;
      height: 300px;
      margin: 2.5% 0 0 2.5%;

      img {
        width: 100%;
        height: 300px;
      }
    }

    div {
      width: 100%;
      margin: 0 0 5% 0;
      padding-top: 1%;
    }
    p {
      margin: 0 1.5% 1.5% 1.5%;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    .visit {
      width: 100%;
      height: 250px;
      margin: 1% 0 0 0;

      img {
        width: 100%;
        height: 250px;
      }
    }

    div {
      width: 100%;
      margin: 0 0 5% 0;
      padding-top: 1%;
    }
    p {
      margin: 0 1.5% 1.5% 1.5%;
    }
  }
`;
const CurrentTwo = styled.div`
  background-color: #2b343e;
  display: flex;
  flex-direction: row-reverse;

  .visit {
    width: 50%;
    margin: 1.5%;
    height: 350px;

    img {
      width: 100%;
      height: 350px;
    }
  }

  div {
    width: 50%;
    flex-direction: column;
    margin: 1.5%;
    color: #fbfbf8;
    padding-top: 3%;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .visit {
      width: 95%;
      height: 300px;
      margin: 2.5% 0 0 2.5%;

      img {
        width: 100%;
        height: 300px;
      }
    }

    div {
      width: 100%;
      margin: 0 0 5% 0;
    }

    p {
      margin: 0 1.5% 1.5% 1.5%;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    .visit {
      width: 100%;
      height: 250px;
      margin: 1% 0 0 0;

      img {
        width: 100%;
        height: 250px;
      }
    }

    div {
      width: 100%;
      margin: 0 0 5% 0;
    }

    p {
      margin: 0 1.5% 1.5% 1.5%;
    }
  }
`;

const Space = styled.div`
  background-color: #2b343e;

  @media (max-width: 800px) {
    background-color: #21b2a6;
    height: 20px;
  }

  @media (max-width: 500px) {
    background-color: #21b2a6;
    height: 10px;
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
        <a className="visit" href="https://www.stampdcert.com/">
          <img src={stampd} alt="Stampd" />
        </a>
        <div>
          <h2>Stampd</h2>
          <p>
            Stampd is a blockchain-based project that allows educational
            institutions to permanently issue fully verified credentials that
            are stamped to the Ethereum blockchain <br />
            React | React-Conflux | Styled-Components | Grommet | Apollo-boost | Node and Express | GraphQL | PostgreSQL | Web3
          </p>
          <a href="https://github.com/labs14-stampd">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a>{" "}
          <a href="https://www.stampdcert.com/">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentOne>
      <Space> </Space>
      <CurrentTwo>
        <a
          className="visit"
          href="https://distracted-brown-222a45.netlify.com/"
        >
          <img src={project} alt="S&J" />
        </a>
        <div>
          <h2>S&J Architects</h2>
          <p>
            Built in one week to showcase mastery in fundamentals <br/>
            Home page is mobile responsive <br/>
            HTML | CSS | JavaScript
          </p>
          <a href="https://github.com/meganjeffcoat/User-Interface-Project-Week">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a>{" "}
          <a href="https://distracted-brown-222a45.netlify.com/">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentTwo>
      <Space> </Space>
      <CurrentOne>
        <a
          className="visit"
          href="https://infallible-nightingale-04222d.netlify.com/"
        >
          <img src={notes} alt="Note" />
        </a>
        <div>
          <h2>Notes</h2>
          <p>
            A place to keep notes with the ability to update and remove them <br/>
            React | Redux | Styled Components
          </p>
          <a href="https://github.com/meganjeffcoat/front-end-project-week">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a>{" "}
          <a href="https://infallible-nightingale-04222d.netlify.com/">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentOne>
      <Space> </Space>
      <CurrentTwo>
        <a
          className="visit"
          href="https://safespaceteam.github.io/safespaceuim/#"
        >
          <img src={safe} alt="safe space" />
        </a>

        <div>
          <h2>Safe Space</h2>
          <p>
          Safe Space is a React-based Web Application that allows the user to send themselves positive and uplifting texts <br/>  
            React | Styled Components | Node and Express | Twilio | PostgreSQL | HTML | LESS
          </p>
          <a href="https://github.com/safespaceteam/safespacebackend">
            <FontAwesomeIcon icon={faGithub} color={"#fbfbf8"} size="2x" />
          </a>{" "}
          <a href="https://safespaceteam.github.io/safespaceuim/#">
            <FontAwesomeIcon icon={faEye} color={"#fbfbf8"} size="2x" />
          </a>
        </div>
      </CurrentTwo>
      <Space> </Space>
    </Section>
  );
}

export default CurrentProjects;
