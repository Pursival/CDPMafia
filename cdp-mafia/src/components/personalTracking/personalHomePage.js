import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/comerca.jpg';

const PersonalHomePage = () => {
    return (
        <Card sx={{ maxWidth: 800, m: 'auto', mt: 5 }}>
            <Typography gutterBottom variant="h3" component="div" align="center">
                Welcome to the green future
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
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" component={Link} to="/profile">Profile</Button>
                    <Button variant="outlined" component={Link} to="/input">Input</Button>
                    <Button variant="outlined" component={Link} to="/more-info">More information</Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PersonalHomePage;