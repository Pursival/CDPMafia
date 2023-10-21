import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

const FullArticle2 = () => {
    return (
        <Card sx={{ maxWidth: 800, m: 'auto', mt: 5 }}>
            <Typography gutterBottom variant="h3" component="div" align="center">
                CommerzBank Green
            </Typography>
            <CardMedia
                component="img"
                height="400"
                image={require('C:\\Users\\Crazzyninja\\IdeaProjects\\CDPMafiaLatest\\cdp-mafia\\src\\components\\imagesFolder\\comerca.jpg')}
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

export default FullArticle2;