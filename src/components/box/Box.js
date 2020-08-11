import React from 'react';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./Box.css"

function Box({ title, url, newsUrl }) {

    return (
        <Card className="news_box">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={url}
                    className="image"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography><br></br>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="link">Learn More</a>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Box;