import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PersonalHomePage = () => {
    return (
        <Card sx={{ maxWidth: 800, m: 'auto', mt: 5 }}>
            <Typography gutterBottom variant="h3" component="div" align="center">
                Welcome to the green future
            </Typography>
            <CardMedia
                component="img"
                height="400"
                // image={require('C:\\Users\\Crazzyninja\\IdeaProjects\\CDPMafiaLatest\\cdp-mafia\\src\\components\\imagesFolder\\comerca.jpg')}
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
                <Stack spacing={2} direction="row">
                    <Button variant="outlined">Profile</Button>
                    <Button variant="outlined">Input</Button>
                    <Button variant="outlined">More information</Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PersonalHomePage;