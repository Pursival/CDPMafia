import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const leaderboardData = [
    { username: 'User1', score: 120 },
    { username: 'User2', score: 95 },
    { username: 'User3', score: 80 },
];

const Leaderboard = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Environmental Sustainability Leaderboard
            </Typography>
            <List>
                {leaderboardData.map((user, index) => (
                    <ListItem key={index} component={Paper} style={{ backgroundColor: '#3f51b5', color: '#fff', marginBottom: '16px', borderRadius: '8px' }}>
                        <ListItemText
                            primary={<span style={{ fontWeight: 'bold' }}>{user.username}</span>}
                            secondary={<span style={{ marginLeft: '16px' }}>Score: {user.score}</span>}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Leaderboard;
