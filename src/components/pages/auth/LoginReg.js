import { Grid,Card,Typography,Tabs,Tab,Box } from '@mui/material';
import { useState } from 'react';
import Pic1 from '../../../images/pic1'

const TabPanel=(props)=>{
    const{children,value,index}=props;
    return(
        <div role='tabpanel' hidden={value !==index}>
            {
                value===index&&(
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg=()=>{
    const [value,setValue]=useState(0);
    const handleChange=(event,newValue)=>{
        setValue(newValue);
    }
    return<>
    <Grid container sx={{height:'80vh'}}>
        <Grid item Lg={7} sm={5} sx={{
            backgroundImage:`url(${Pic1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        
        </Grid>
        <Grid item Lg={5} sm={7}>
        <Card sx={{width:'100%',height:'100%'}}>
            <Box>
                <Box sx={{borderBottom:1,borderColor:'divider'}}>
                    <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                    <Tab label='Login' sx={{textTransform: 'none',fontWeight: 'Bold'}} ></Tab>
                    <Tab label='Registration' sx={{textTransform:'none',fontWeight:'Bold'}} ></Tab>
                    </Tabs>
                    <TabPanel value={value} index={0}>User Login</TabPanel>
                    <TabPanel value={value} index={1}>Registration</TabPanel>
                </Box>
            </Box>
        </Card>
        </Grid>
    </Grid>
    </>;
};
export default LoginReg;