import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faPython,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";

const Intro = styled.section`
  background-color: #505393;
  margin-top: -2%;
  color: #fbfbf8;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 2rem;
    padding-top: 1%;
  }

  h2 {
    font-size: 1.6rem;
  }


`;

const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  p{
    padding: 1%;
    margin: 11% 7% 4% 7%;
  }

`;

const Block1 = styled.div`
  border: 1px solid #4d518e;
  background-color: #4d518e;
  width: 50%;
  height: 300px;
  margin: 1.5% 1.5%;
  
`;

const Block2 = styled.div`
  border: 1px solid #4a4d89;
  background-color: #4a4d89;
  width: 50%;
  height: 300px;
  margin: 1.5% 1.5%;
`;

const Block3 = styled.div`
  border: 1px solid #484b85;
  background-color: #484b85;
  width: 50%;
  height: 300px;
  margin: 1.5% 1.5%;
`;

const Block4 = styled.div`
  border: 1px solid #444880;
  background-color: #444880;
  width: 50%;
  height:300px;
  margin: 1.5% 1.5%;
`;

function Skills() {
  return (
    <Intro>
      <h1>SKILLS</h1>
      <Blocks>
        <Block1>
          <h2>
            <FontAwesomeIcon icon={faFileCode} color={"#21B2A6"} /> HTML & CSS
          </h2>
          <p>
            Focused on the fundamentals to gain a deeper understanding and build
            a strong foundation
          </p>
        </Block1>
        <Block2>
          <h2>
            <FontAwesomeIcon icon={faJsSquare} color={"#21B2A6"} /> JAVASCRIPT
          </h2>
          <p>
            Focusing with ES6 and continuing to grown in JavaScript skill set
          </p>
        </Block2>
      </Blocks>
      <Blocks>
        <Block3>
          <h2>
            <FontAwesomeIcon icon={faReact} color={"#21B2A6"} /> REACT
          </h2>
          <p>
            Proficient with React and using Redux. Expanding React knowledge by
            self studying hooks and new material.
          </p>
        </Block3>
        <Block4>
          <h2>
            <FontAwesomeIcon icon={faNodeJs} color={"#21B2A6"} /> NODE & EXPRESS
          </h2>
          <p>
            Node and Express have been my primary focus for backend development.
            Continuing to grow my knowledge base and expand into other options
            for back end as well
          </p>
        </Block4>
      </Blocks>
      <Blocks>
        <Block1>
          <h2>
            <FontAwesomeIcon icon={faPython} color={"#21B2A6"} /> PYTHON
          </h2>
        </Block1>
        <Block2>
          <h2>
            <FontAwesomeIcon icon={faCode} color={"#21B2A6"} /> BLOCKCHAIN
          </h2>
        </Block2>
      </Blocks>
    </Intro>
  );
}

export default Skills;
