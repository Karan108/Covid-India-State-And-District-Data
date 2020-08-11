import React from 'react'
import corona1 from "./corona_image.svg";
import "./About.css";
import { Typography, Grid } from "@material-ui/core";
function About() {
    return (
        <div className="about-box">
            <Grid container spacing={3}>
                <Grid item xs={12} lg={3}>
                    <div className="img-container">
                        <img src={corona1} alt="corona pic" className="corona-img" />
                    </div>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <div className="desc">
                        <h2 className="question">What is COVID-19(Corona virus)?</h2>
                        <div className="desc-content">
                            <Typography variant="body1">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available</Typography>
                        </div></div></Grid>
            </Grid>
        </div>
    )
}

export default About
