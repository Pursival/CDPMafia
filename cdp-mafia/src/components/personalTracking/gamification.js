import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const userBadges = [
    { name: 'Eco Warrior', description: 'Completed 10 sustainability challenges' },
    { name: 'Tree Hugger', description: 'Planted 5 trees' },
];

const Badges = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Your Environmental Sustainability Badges
            </Typography>
            <List>
                {userBadges.map((badge, index) => (
                    <ListItem key={index} component={Paper} style={{ backgroundColor: '#f50057', color: '#fff', marginBottom: '16px', borderRadius: '8px' }}>
                        <ListItemText
                            primary={<span style={{ fontWeight: 'bold' }}>{badge.name}</span>}
                            secondary={<span style={{ marginLeft: '16px' }}>{badge.description}</span>}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Badges;
