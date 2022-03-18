import { Grid,Card,Typography,Tabs,Tab,Box } from '@mui/material';
import Pic1 from '../../../images/pic1'
const LoginReg=()=>{
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
                    <Tabs textColor='secondary' indicatorColor='secondary'>
                    <Tab label='Login' sx={{textTransform: 'none',fontWeight: 'Bold'}} ></Tab>
                    <Tab label='Registration' sx={{textTransform:'none',fontWeight:'Bold'}} ></Tab>
                    </Tabs>
                </Box>
            </Box>
        </Card>
        </Grid>
    </Grid>
    </>;
};
export default LoginReg;