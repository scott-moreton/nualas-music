/**
 * Created by SCMORETO on 30/08/2017.
 */
import React, { Component } from "react";
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import Nuala from "../images/NualaOne.jpg";

//Relative css to position social icons over the image,
//applies flex for responsiveness - flex-end postions
//icons to left of the screen
const Container = styled.div`
 display: flex;
 flex-direction: row;
 position: relative;
 justify-content: flex-end;
`;

//positions the social icons - flex direction
//column over row to display icons horizontally
const SocialMediaIcons = styled.div`
 display: flex;
 flex-direction: column;
 position: absolute;
 z-index: 1000;
`;

const StyleTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//TextStyling
const Text = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  color: #F0E68C;
  position: absolute;
  font-family: 'PT Sans', sans-serif;
  font-size: 250px;
  z-index: 1000;
  opacity: 0.6;
`;

class LandingPageTwo extends Component {
    render() {
        return (
            <Card>
                <Container>
                    <SocialMediaIcons>
                        <SocialIcon color="white" url="http://facebook.com/nualasmusic "/>
                        <SocialIcon color="white"url="http://youtube.com/user/NualaBW " />
                        <SocialIcon color="white" url="http://soundcloud.com/nualasmusic " />
                    </SocialMediaIcons>           
                <CardMedia
             overlay={<CardTitle title="" subtitle="Singer / Songwriter"/>}
            >
            <StyleTitle>
                <Text>NUALA</Text>
            </StyleTitle>
                   <img src={Nuala} alt=""/>
                </CardMedia>          
                </Container>

            </Card>

        )
    }


}

export default LandingPageTwo;
