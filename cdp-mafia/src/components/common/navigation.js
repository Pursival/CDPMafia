import {Outlet, Link} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Navigation = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:'lightgreen'}}>
                    <Typography variant="h6" >
                        Sustainable souls
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/marketplace">
                        Marketplace
                    </Button>
                    <Button color="inherit" component={Link} to="/person">
                        Person
                    </Button>
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

