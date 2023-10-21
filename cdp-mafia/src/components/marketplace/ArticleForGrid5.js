import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/R.png';


export default function ArticleForGrid5() {
    return (
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/article5">
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={myImage}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        EcoHomes Construction                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        EcoHomes Construction is setting a new standard in sustainable living with its innovative project focused on eco-friendly home construction.                    </Typography>
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