import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppCurrentVisits from "../dashboard/app-current-visits";


const defaultTheme = createTheme();

export default function ChartPage() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 19 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={400}>
                            <AppCurrentVisits
                                title="Current Visits"
                                chart={{
                                    series: [
                                        {label: 'America', value: 4344},
                                        {label: 'Asia', value: 5435},
                                        {label: 'Europe', value: 1443},
                                        {label: 'Africa', value: 4443},
                                    ],
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AppCurrentVisits
                                title="Current Visits"
                                chart={{
                                    series: [
                                        {label: 'America', value: 4344},
                                        {label: 'Asia', value: 5435},
                                        {label: 'Europe', value: 1443},
                                        {label: 'Africa', value: 4443},
                                    ],
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AppCurrentVisits
                                title="Current Visits"
                                chart={{
                                    series: [
                                        {label: 'America', value: 4344},
                                        {label: 'Asia', value: 5435},
                                        {label: 'Europe', value: 1443},
                                        {label: 'Africa', value: 4443},
                                    ],
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AppCurrentVisits
                                title="Current Visits"
                                chart={{
                                    series: [
                                        {label: 'America', value: 4344},
                                        {label: 'Asia', value: 5435},
                                        {label: 'Europe', value: 1443},
                                        {label: 'Africa', value: 4443},
                                    ],
                                }}/>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
