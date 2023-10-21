import React from 'react';
import { Paper, Avatar, Typography, Grid } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppCurrentVisits from "../dashboard/app-current-visits";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const defaultTheme = createTheme();

const Profile = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        profilePicture: '/path-to-profile-image.jpg',
    };

    return (
        <Paper elevation={3} style={{ padding: 20 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
                    <Avatar alt="User" src={user.profilePicture} style={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        {user.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {user.email}
                    </Typography>
                </Grid>
            </Grid>
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
        </Paper>

    );
};

export default Profile;
