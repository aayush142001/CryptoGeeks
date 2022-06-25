import React from 'react';
import AuthModal from './Authentication/AuthModal';
import { AppBar,Container,Toolbar,Typography,Select,MenuItem,makeStyles,createTheme,ThemeProvider} from '@material-ui/core';
import UserSidebar from "./Authentication/UserSidebar";
import {Link} from 'react-router-dom';
import { CurrencyState } from '../CurrContext';
const useStyles=makeStyles(()=>({
  link:{
    flex:1
  },
  logo:{
    color:'#FF2E63',
    fontFamily:'inherit',
    fontWeight:'bold',
    cursor:'pointer'
  },
  headings:{
    color:'#08D9D6',
    fontFamily:'inherit',
    fontWeight:600,
    cursor:'pointer',
    "&:hover":{
      color:"#FF2E63",
      transition:"0.2s ease-in-out"
    },
  }
}));
const Navbar = () => {
  const classes=useStyles();
  const darkTheme = createTheme({
    palette: {
      primary: {main:'#252A34'},
      type:'dark'
    },
  })
   
  const {currency,setCurrency,user} = CurrencyState();
  return(
     <ThemeProvider theme={darkTheme}>
     <AppBar position='static'>
       <Container className={classes.nav}>
       <Toolbar>
       <Link to='/' className={classes.link}><Typography className={classes.logo} variant='h5'><span style={{color:'white'}}>Crypto </span>Geeks</Typography></Link>
       <Link to='/home' className={classes.link}><Typography className={classes.headings} variant='h6'>Coins</Typography></Link>
       <Link to='/articles' className={classes.link}><Typography className={classes.headings} variant='h6'>Articles</Typography></Link>
       <Select variant='outlined' value={currency} style={{
         width:100,
         height:40,
       }}
       onChange={(e)=>setCurrency(e.target.value)}
       >
         <MenuItem value={'INR'} style={{color:'#08D9D6'}}>INR</MenuItem>
         <MenuItem value={'USD'} style={{color:'#08D9D6'}}>USD</MenuItem>
       </Select>
       {user ? <UserSidebar /> : <AuthModal/>}
       </Toolbar>
       </Container>
     </AppBar>
     </ThemeProvider>);
};

export default Navbar;
