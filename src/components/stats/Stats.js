import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Stats.css";
import numeral from 'numeral';

function Stats({ title, cases, total, borderClr, isred }) {
    let css = "stats";
    if (borderClr === "confirmed") {
        css += " infected";
    } else if (borderClr === "recovered") {
        css += " recovered";
    }
    else if (borderClr === "dead") {
        css += " deaths";
    }

    return (

        <Card className={css}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2" className={`countText ${(!isred) && 'greenText'}`}>
                    {numeral(cases).format('0.0a')}
                </Typography>
                <Typography color="textSecondary">
                    {numeral(total).format('0.0a')}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of {title}.
                </Typography>
            </CardContent>
        </Card >

    )
}

export default Stats
