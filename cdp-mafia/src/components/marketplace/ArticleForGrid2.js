import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/footprint.jpg';


export default function ArticleForGrid2() {
    return (
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/article2">
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={myImage}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GreenEats Food Co.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Article: GreenEats Food Co. is revolutionizing the food industry with its 'Farm-to-Fork' sustainability project.
                    </Typography>
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