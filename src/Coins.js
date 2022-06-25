import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { SingleCoin } from './Api/Api';
import CoinInfo from './Components/CoinInfo';
import { CurrencyState } from './CurrContext';
import { Button, LinearProgress, Typography} from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import { numComa } from './Components/LandingPage/Carousel';

const Coins = () => {
  const {id}=useParams();
  const [coin,setCoin]=useState();
  const {currency,symbol}=CurrencyState();

  const fetchCoin=async()=>{
    const {data}=await axios.get(SingleCoin(id));
    setCoin(data);
  };
 
  useEffect(()=>{
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currency]);

  const useStyles=makeStyles((theme)=>({
    container:{
      display:"flex",
      [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center"
      }
    },
      sidebar:{
        borderRight:"2px solid #B4C6A6",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:25,
        width:"30%",
        [theme.breakpoints.down("md")]:{width:"100%"}
      },
      heading:{
        fontWeight:"bold",
        marginBottom:20
      },
      desc:{
        width:"100%",
        padding:"0 25px 15px 25px",
        textAlign:"justify"
      },
      data:{
        width:"100%",
        alignSelf:"start",
        padding:" 10px 25px 25px 25px",
        [theme.breakpoints.down("md")]:{display:"flex",justifyContent:"space-around"},
        [theme.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center"},
        [theme.breakpoints.down("xs")]:{alignItems:"start"}
      }
    }));
  const classes=useStyles();

  if(!coin) return <LinearProgress style={{backgroundColor:"#FF2E63"}}/>
  return (
  <div className={classes.container}>
    <div className={classes.sidebar}>
      <img src={coin?.image.large} alt={coin?.name} height="200" style={{marginBottom:20}} />
      <Typography variant="h3" className={classes.heading}>{coin?.name}</Typography>
      <Typography className={classes.desc}>{ReactHtmlParser(coin?.description.en.split(". ")[0])}.</Typography>
      <div className={classes.data}>

      <span style={{display:"flex"}}><Typography variant="h5" className={classes.heading}>Rank:</Typography>&nbsp;&nbsp; 
      <Typography variant="h5">{coin?.market_cap_rank}</Typography>
      </span>

      <span style={{display:"flex"}}><Typography variant="h5" className={classes.heading}>Current Price:</Typography>&nbsp;&nbsp; 
      <Typography variant="h5">{symbol+" "}{numComa(coin?.market_data.current_price[currency.toLowerCase()])}</Typography>
      </span>

      <span style={{display:"flex"}}><Typography variant="h5" className={classes.heading}>Market Cap:</Typography>&nbsp;&nbsp; 
      <Typography variant="h5">{symbol+" "}{numComa(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6))+" "}M</Typography>
      </span>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Button variant="outlined"><a href='https://pvtg.github.io/Demo/' target="_blank">Demo</a></Button>
          <Button variant="outlined">Invest</Button>
        </div>
      </div>
    </div>
    <CoinInfo coin={coin}/>
  </div>
  );
};

export default Coins;
