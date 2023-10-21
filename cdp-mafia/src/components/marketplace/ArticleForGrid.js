import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/comerca.jpg';


export default function ArticleForGrid() {
    return (
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/article1">
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={myImage}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        EcoTech Solutions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        EcoTech Solutions is taking sustainability to the next level with its innovative project aimed at providing clean, safe drinking water to underserved communities.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button align="center" size="small" color="primary" >
                    Read more
                </Button>
            </CardActions>
        </Card>
    );
}