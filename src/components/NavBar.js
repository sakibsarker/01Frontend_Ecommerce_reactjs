import { AppBar,Box,Toolbar,Typography,Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const NavBar = () =>{
    return <>
    <Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary">
    <Toolbar>
        <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
            Agriculture Shop
        </Typography>
        <Button component={NavLink} to="/" sx={{color:'white'}}>Home</Button>
        <Button component={NavLink} to="/Contract" sx={{color:'white'}}>Contract</Button>
    </Toolbar>
    </AppBar>
    </Box>
    </>;
};
export default NavBar;