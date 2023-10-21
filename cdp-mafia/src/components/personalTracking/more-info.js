import React from 'react';
import {Container, Typography, Card, CardContent, CardMedia, withStyles} from '@mui/material';

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '20px 0',
    },
    cardMedia: {
        width: 200,
        height: 200,
        flexShrink: 0,
    },
    cardContent: {
        flex: '1 0 auto',
    },
};


const MoreInfo = (props) => {
    const classes = props;

    // Sample environmental tips data
    const tips = [
        {
            title: 'Reduce, Reuse, Recycle',
            description: 'Recycle paper, plastic, glass, and aluminum. Reuse items when possible.',
            image: '/recycle-image.jpg',
        },
        {
            title: 'Conserve Water',
            description: 'Turn off the tap while brushing your teeth and fix any leaks.',
            image: '/water-image.jpg',
        },
        {
            title: 'Save Energy',
            description: 'Turn off lights and unplug devices when not in use. Use energy-efficient appliances.',
            image: '/energy-image.jpg',
        },
    ];

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Daily Environmental Tips
            </Typography>
            {tips.map((tip, index) => (
                <Card className={classes.card} key={index}>
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={tip.image}
                        title={tip.title}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h5">{tip.title}</Typography>
                        <Typography>{tip.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default MoreInfo;