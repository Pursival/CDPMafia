import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ArticleForGrid4() {
    return (
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={require('C:\\Users\\Crazzyninja\\IdeaProjects\\CDPMafiaLatest\\cdp-mafia\\src\\components\\imagesFolder\\comerca.jpg')}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CommerzbankGreen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Commerzbank green's purpose is reducing carbon footprint for bank customers by
                        reducing use of non reusable materials.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button align="center" size="small" color="primary" >
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}