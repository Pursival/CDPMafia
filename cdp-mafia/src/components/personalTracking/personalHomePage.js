import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/R (1).png';

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
                    At Sustainable Soul, we're on a mission to empower you to make a positive impact on our planet. Our platform is your personal sustainability tracking companion, designed to inspire and guide you on your journey towards a greener, more sustainable lifestyle. Together, we're paving the way for a brighter, eco-conscious future.
                <br/>
                    Why choose us?
                    <br/>
                    🌱 Seamless Tracking: Easily monitor your personal sustainability efforts, from energy consumption and waste reduction to transportation choices and more. Our user-friendly interface makes it simple to log and measure your eco-conscious activities.
                    <br/>
                    🌿 Informed Decision-Making: Access valuable insights and personalized recommendations that help you make eco-friendly choices with confidence. Our cutting-edge analytics give you a deeper understanding of your environmental impact.
                    <br/>
                    🌍 Community and Inspiration: Join a vibrant community of like-minded individuals committed to sustainability. Share your achievements, learn from others, and discover new ways to live a greener, more mindful life.
                    <br/>
                    📈 Track Your Progress: Watch your sustainability journey unfold through interactive charts and graphs. Celebrate your wins and stay motivated to reach new milestones.
                    <br/>
                    🔒 Privacy and Security: Your data security is our top priority. We ensure your information is protected, so you can use our platform with peace of mind.
                    <br/>
                    It's time to take control of your impact on the environment and contribute to a cleaner, healthier world. Together, we can create a future where sustainability is more than a buzzword—it's a way of life. Join us in making every day Earth Day.
                    <br/>
                    Start tracking your sustainability journey today and be a part of the solution. Welcome to the green future.
                    <br/>
                </Typography>
                <Stack alignItems="center" justifyContent="center" spacing={2} direction="row">
                    <Button variant="outlined" component={Link} to="/profile">Profile</Button>
                    <Button variant="outlined" component={Link} to="/leaderboard">Input</Button>
                    <Button variant="outlined" component={Link} to="/more-info">More information</Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PersonalHomePage;