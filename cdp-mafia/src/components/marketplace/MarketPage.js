import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ArticleForGrid from "./ArticleForGrid";
import ArticleForGrid2 from "./ArticleForGrid2";
import ArticleForGrid3 from "./ArticleForGrid3";
import ArticleForGrid5 from "./ArticleForGrid5";
import ArticleForGrid4 from "./ArticleForGrid4";
import ArticleForGrid6 from "./ArticleForGrid6";


// const images = [
//     {
//         id: 1,
//         title: 'CommerzBankGreen',
//         imageUrl: 'C:\\Users\\Crazzyninja\\IdeaProjects\\CDPMafiaLatest\\cdp-mafia\\src\\components\\imagesFolder\\comerca.jpg',
//         buttonText: 'Invest',
//         description: 'Commerzbank green s purpose is reducing carbon footprint for bank customers by reducing use of non reusable materials.'
//     },
//     {
//         id: 2,
//         title: 'CommerzBankBlue',
//         imageUrl: 'C:\\Users\\Crazzyninja\\IdeaProjects\\CDPMafiaLatest\\cdp-mafia\\src\\components\\imagesFolder\\footprint.jpg',
//         buttonText: 'Invest2',
//         description: 'I am blue dabade dabada',
//     },
//     // Add more image objects as needed
// ];


//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function MarketPage() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md" >
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <ArticleForGrid/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ArticleForGrid2/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ArticleForGrid3/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ArticleForGrid4/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ArticleForGrid5/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <ArticleForGrid6/>
                    </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
