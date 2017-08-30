import React, { Component } from "react";
import styled from "styled-components";
import Nuala from "../images/Nuala.jpg";

// const BoxLogo = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   text-align: center;
//   img {
//     width: 70%;
//     height: 55%;
//   }
// `;
//
// const WhiteBackground = styled.div`
//   max-width: 100%;
//   height: auto;
//   background-color: black;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//
// `;

const BoxLogo = styled.div`
  width: 100%;
  justify-content: center;
  
  img {
    max-width: 50%;
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

                <div>
                    <Text>
                    GIG DATES
                    </Text>
                </div>
            </BackgroundColour>
        );
    }
}

export default LandingPage;
