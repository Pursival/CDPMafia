import React from 'react';
import {Container, css, Typography} from '@mui/material';
import myImage1 from '../../imagesFolder/green-recycle-symbol-icon-free-vector.jpg';
import myImage2 from '../../imagesFolder/footprint.jpg';
import myImage3 from '../../imagesFolder/icon_save_money.svg';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";


const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const cardStyles = css`
  border: 1px solid #ddd;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  max-width: 500px;
`;

const titleStyles = css`
  font-size: 24px;
  color: #333;
`;

const descriptionStyles = css`
  font-size: 16px;
  color: #555;
`;

const MoreInfo = (props) => {
    const classes = props;

    // Sample environmental tips data
    const tips = [
        {
            title: 'Reduce, Reuse, Recycle',
            description: 'Recycle paper, plastic, glass, and aluminum. Reuse items when possible.',
            image: myImage1,
        },
        {
            title: 'Conserve Water',
            description: 'Turn off the tap while brushing your teeth and fix any leaks.',
            image: myImage2,
        },
        {
            title: 'Save Energy',
            description: 'Turn off lights and unplug devices when not in use. Use energy-efficient appliances.',
            image: myImage3,
        },
    ];

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Daily Environmental Tips
            </Typography>
            <div css={containerStyles}>
            {tips.map((tip, index) => (
                <Card className={classes.card} key={index} css={cardStyles}>
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={tip.image}
                        title={tip.title}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h5" css={titleStyles}>{tip.title}</Typography>
                        <Typography css={descriptionStyles}>{tip.description}</Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
        </Container>
    );
};

export default MoreInfo;