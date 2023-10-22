import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import myImage from '../../imagesFolder/footprint.jpg';

const FullArticle6 = () => {
    return (
        <Card sx={{ maxWidth: 800, m: 'auto', mt: 5 }}>
            <Typography gutterBottom variant="h3" component="div" align="center">
                CommerzBank Green
            </Typography>
            <CardMedia
                component="img"
                height="400"
                image={myImage}
                alt="Article Header"
            />
            <CardContent>

                <Typography variant="body10" color="text.secondary" display="block">
                    <br/>  Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>  Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/> Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>    Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>  Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>  Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/> Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>    Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.<br/>  Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>  Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/> Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                    <br/>    Commerzbank green's purpose is reducing carbon footprint for bank customers by
                    reducing use of non reusable materials.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FullArticle6;