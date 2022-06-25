import { Container,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Carousel from './Carousel';

const useStyles=makeStyles((theme)=>({
    container:{
        // border:'2px solid red',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        height:400,
        paddingTop:25,
        [theme.breakpoints.down("md")]:{
            height:600
          }
    },
    tagline:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color:'#F4F4F4',
        textAlign:'center'
    }
}));

const Landing = () => {
      const classes=useStyles();
  return (
    <> 
    <Container className={classes.container}>
    <div className={classes.tagline}>
    <Typography variant='h1' style={{
        fontFamily:'inherit',
        fontWeight:'bold'
    }}>
    Crypto Geeks
    </Typography>
    <Typography variant='h6'
    style={{
        color:'#08D9D6',
        fontFamily:'inherit',
        textTransform:'capitalize'
    }}> 
    Tracking cryptocurrency performance is hard. We make it easy and help you save money.
    </Typography>
    </div>
    <Carousel/>
    </Container>
  </>
  );
};

export default Landing;
