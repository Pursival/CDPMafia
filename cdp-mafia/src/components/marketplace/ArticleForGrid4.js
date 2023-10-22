import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/icon_save_money.svg';


export default function ArticleForGrid4() {
    return (
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/article4">
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={myImage}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GreenWheels Transportatio
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        GreenWheels Transportation is making strides toward a more sustainable future with its eco-friendly transportation project.                     </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="success" align="center" size="small">
                    Invest
                </Button>
            </CardActions>
        </Card>
    );
}