import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, withStyles } from '@mui/material';

const styles = {
    container: {
        marginTop: 20,
    },
    paper: {
        padding: 20,
    },
    leaderboard: {
        width: '100%',
        textAlign: 'center',
    },
    badges: {
        width: '100%',
        textAlign: 'center',
    },
};

const SustainabilityChallengesPage = ({ classes }) => {
    const [leaderboardData, setLeaderboardData] = useState([
        { username: 'User1', score: 150 },
        { username: 'User2', score: 120 },
        { username: 'User3', score: 90 },
    ]);

    const [userBadges, setUserBadges] = useState([
        { name: 'Eco Warrior', description: 'Completed 5 challenges' },
        { name: 'Recycler', description: 'Recycled 100 items' },
    ]);

    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                    Sustainability Challenges
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.leaderboard}>
                            <Typography variant="h5" gutterBottom>
                                Leaderboard
                            </Typography>
                            <ol>
                                {leaderboardData.map((user, index) => (
                                    <li key={index}>
                                        {user.username} - {user.score} points
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.badges}>
                            <Typography variant="h5" gutterBottom>
                                Your Badges
                            </Typography>
                            <ul>
                                {userBadges.map((badge, index) => (
                                    <li key={index}>
                                        {badge.name} - {badge.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default SustainabilityChallengesPage;
