import React from 'react';
import { Paper, Avatar, Typography, Grid } from '@mui/material';

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
        </Paper>
    );
};

export default Profile;
