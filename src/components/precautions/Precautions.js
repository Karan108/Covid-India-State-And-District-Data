import React from 'react';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import avoidTouching from "./images/avoid_touching.svg";
import avoidTravel from "./images/avoid_travel.svg";
import socialDistance from "./images/social_distance.svg";
import stayHome from "./images/stay_home.svg";
import washHands from "./images/wash_hands.svg";
import wearMask from "./images/wear_mask.svg";
import "./Precautions.css";


export default function Precautions() {
    return (
        <div>
            <Container maxWidth="md" className="out">
                <h2 align="center" className="sub-title">Precautions</h2>
                <Grid container spacing={3} align="center" className="precautions-container">
                    <Grid item xs={9} md={4} lg={4} className="pre-item">
                        <img src={wearMask} alt="wear Mask" className="pre-img" />
                        <Typography>Wear a face mask covering over your mouth and nose when around others.</Typography>
                    </Grid>
                    <Grid item xs={9} md={4} lg={4} className="pre-item">
                        <img src={washHands} alt="wash Hands" className="pre-img" />
                        <Typography>Wash your hands often with soap and water for at least 20 seconds.</Typography>
                    </Grid>
                    <Grid item xs={9} md={4} lg={4} className="pre-item">
                        <img src={socialDistance} alt="social Distance" className="pre-img" />
                        <Typography>Keep at least 6 feet between yourself and others if you must be in public.</Typography>
                    </Grid>
                    <Grid item xs={9} md={4} lg={4} className="pre-item">
                        <img src={avoidTravel} alt="avoid Travel" className="pre-img" />
                        <Typography>Traveling can help increase the spread of COVID-19 and put you at risk. </Typography>
                    </Grid>
                    <Grid item xs={9} md={4} lg={4} className="pre-item">
                        <img src={avoidTouching} alt="avoid Touching" className="pre-img" />
                        <Typography>Don’t touch your eyes, nose or mouth.</Typography>
                    </Grid>
                    <Grid item xs={9} md={4} lg={4} className="pre-item">
                        <img src={stayHome} alt="stay Home" className="pre-img" />
                        <Typography>Stay at home, do not go out unless it is very important.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
