import React from 'react';
import styled from 'styled-components';
import title from '../assets/images/code.png';

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
    color: white;
    
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

function Title() {
    return (
        <Container>
            <Name>
             <h1>MEGAN JEFFCOAT</h1> 
             <p>FULL STACK WEB DEVELOPER</p>  
            </Name>
        </Container>
    )
}

export default Title;