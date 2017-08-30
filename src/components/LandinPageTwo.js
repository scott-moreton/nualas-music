/**
 * Created by SCMORETO on 30/08/2017.
 */
import React, { Component } from "react";
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import Nuala from "../images/Nuala.jpg";


const Container = styled.div`
 display: flex;
 flex-direction: row;
 position: relative;
 justify-content: flex-end;
`;

const SocialMediaIcons = styled.div`
 display: flex;
 flex-direction: column; 
 position: absolute;
 z-index: 1000;
`;

class LandingPageTwo extends Component {
    render() {
        return (
            <Card>
                <Container>
                    <SocialMediaIcons>
                        <SocialIcon url="http://facebook.com/nualasmusic " />
                        <SocialIcon url="http://youtube.com/user/nualasmusic " />
                        <SocialIcon url="http://soundcloud.com/nualasmusic " />
                    </SocialMediaIcons>
                <CardMedia
                    overlay={<CardTitle title="Nuala Bennett-Wilford" subtitle="Singer / Songwriter"/>}
                >
                   <img src={Nuala} alt=""/>
                </CardMedia>
                </Container>
                <CardTitle title="Performances" subtitle=""/>
                <CardText>
                    SOME TEXT.....GIG DATES...ABOUT ME
                </CardText>

            </Card>

        )
    }


}

export default LandingPageTwo;