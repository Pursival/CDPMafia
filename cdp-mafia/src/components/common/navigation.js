import {Outlet, Link} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { AppContext } from './AppContext';
import {useContext} from "react";
const Navigation = () => {
    const { variable } = useContext(AppContext);
    return (
        <>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:'lightgreen'}}>
                    <Typography variant="h5" color="inherit" >
                        Sustainable souls
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/marketplace">
                        Marketplace
                    </Button>
                    <Button color="inherit"  component={Link} to="/person">
                        Profile
                    </Button>
                    <div style={{ marginLeft: '800px'}}>
                        <p>TreeTokens: {variable}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <Avatar alt="User" src="/path-to-avatar-image.jpg" />
                    </div>
                </Toolbar>
            </AppBar>

            <Outlet/>
        </>
    )
};

export default Navigation;

