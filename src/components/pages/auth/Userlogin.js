import { TextField,Button,Box,Alert } from '@mui/material';
const Userlogin=()=>{
    return<>
    <Box component='form' noValidate sx={{mt:1}} id='login-form'>
        <TextField margin='normal' required follwidth id='email' name='email'
        label='Email Address' a />
        <TextField margin='normal' required follwidth id='Password' name='Password'
        label='Password' type='password' a />
        <Box>
        <Button type='submit' variant='contained'>Login</Button>
        </Box>
    </Box>
    </>;
};
export default Userlogin;