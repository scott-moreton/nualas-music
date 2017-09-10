import React, { Component } from "react";
import styled from "styled-components";
import Nuala from "../images/Nuala.jpg";


const BoxLogo = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

//sets the background color
const BackgroundColour = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

//TextStyling
const Text = styled.div`
  display: flex;
  max-width: 100%;
  color: white;
  font-family: 'Slabo 13px', serif;
  font-size: 100px;
`;

// font-family: 'Slabo 13px', serif;
// font-family: 'Changa One', cursive;
// font-family: 'Suravaram', serif;

class LandingPage extends Component {
    render() {
        return (
            <BackgroundColour>
                <Text>NUALA</Text>
                <BoxLogo>
                    <img src={Nuala} alt="Success" />
                </BoxLogo>
            </BackgroundColour>
        );
    }
}

export default LandingPage;
