import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/R (1).png';


export default function ArticleForGrid6() {
    return (
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/article6">
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={myImage}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        RecycleRevolution                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        RecycleRevolution is reshaping the recycling landscape with its Circular Economy Initiative.                     </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="success" align="center" size="small" >
                    Invest
                </Button>
            </CardActions>
        </Card>
    );
}