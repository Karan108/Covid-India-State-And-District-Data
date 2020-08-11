import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import light_cough from "./images/light_cough.gif";
import light_fever from "./images/light_fever.gif";
import light_tiredness from "./images/light_tiredness.gif";
import body_pain from "./images/body_pain.svg"
import sore_throat from "./images/sore_throat.svg"
import chest_pain from "./images/chest_pain.svg"
import skin_rash from "./images/skin_rash.svg"
import breathing from "./images/breathing.svg";
import "./Symptoms.css";
const useStyles = makeStyles((theme) => ({
    img: {
        height: "100px",
        marginBottom: "10px"
    },
}));

export default function Symptoms() {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="md">
                <h2 align="center" className="sub-title">Symptoms</h2>
                <Grid container spacing={3} align="center">
                    <Grid item xs={6} md={3} lg={3} >
                        <img src={light_cough} alt="cough" />
                        <Typography>Cough</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={light_fever} alt="fever" className={classes.img} />
                        <Typography>Fever</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={light_tiredness} alt="tiredness" className={classes.img} />
                        <Typography>Tiredness</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={body_pain} alt="body pain" className={classes.img} />
                        <Typography>Body Pain</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={sore_throat} alt="sore_throat" className={classes.img} />
                        <Typography>Sore throat</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={chest_pain} alt="chest_pain" className={classes.img} />
                        <Typography>Chest pain</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={breathing} alt="breathing" className={classes.img} />
                        <Typography>Breathing Problem</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <img src={skin_rash} alt="skin_rash" className={classes.img} />
                        <Typography>Skin rashes</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
