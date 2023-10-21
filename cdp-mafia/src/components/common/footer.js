import "./common.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";


export const Footer = (props) => {
    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                EarthSoul contact information
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                The best Project in Collabothon
            </Typography>
            <Copyright/>
        </Box>
    );
};