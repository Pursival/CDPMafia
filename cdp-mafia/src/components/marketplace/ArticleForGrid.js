import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    Button,
    CardActionArea,
    CardActions,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import {Link} from "react-router-dom";
import myImage from '../../imagesFolder/comerca.jpg';
import {useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import {AppContext, AppProvider} from "../common/AppContext";
const ArticleForGrid = () => {
    let { variable, setVariable } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [tokens, setTokens] = useState(0);
    let totalTokens = 100; // Set your total tokens here
    // eslint-disable-next-line
    const handleInvestClick = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleTokenChange = (event) => {
        setTokens(event.target.value);
    };

    const handleInvestConfirm = () => {
        // Handle token investment logic here
            variable=variable-tokens;
            setVariable(variable);
            console.log(`Investing ${tokens} tokens.`);
            console.log(`${totalTokens} Tokens  left.`);
            setTokens(0);
            setOpen(false);
    };

    return (
        <AppProvider>
        <div>
        <Card style={{flex:1, backgroundColor:'lightgreen'}} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/article1">
                    <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={myImage}
                        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        EcoTech Solutions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        EcoTech Solutions is taking sustainability to the next level with its innovative project aimed at providing clean, safe drinking water to underserved communities.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="success" align="center" size="small" onClick={handleInvestClick} >
                    Invest
                </Button>
            </CardActions>
        </Card>
    <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Invest Tokens</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Enter the number of tokens you want to invest (Max: {totalTokens} tokens).
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="tokens"
                label="Tokens to Invest"
                type="number"
                value={tokens}
                onChange={handleTokenChange}
                InputProps={{ inputProps: { min: 0, max: totalTokens } }}
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleInvestConfirm}>Invest</Button>
        </DialogActions>
    </Dialog>
        </div>
        </AppProvider>
            );
}
export default ArticleForGrid;