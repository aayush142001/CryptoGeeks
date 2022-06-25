import {makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { TrendingCoins } from '../../Api/Api';
import { CurrencyState } from '../../CurrContext';
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

const useStyles=makeStyles(()=>({
    carousel:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'50%',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textTransform:'uppercase',
        color:'#F4F4F4'
    }
}));

export const numComa=num=>num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
const Carousel = () => {
     const classes=useStyles();
     const [trendingCoins,setTrendingCoins]=useState([]);
     const {currency,symbol}=CurrencyState();
    //  const fetchTrending=async()=>{
    //      const data=await axios.get(TrendingCoins(currency));
    //      setTrendingCoins(data.data);
    //  }

     useEffect(()=>{
        const fetchTrending=async()=>{
            const data=await axios.get(TrendingCoins(currency));
            setTrendingCoins(data.data);
        }
         fetchTrending();
     },[currency]);

      const responsive={
        0: {
            items: 2,
        },
        512: {
            items: 4
        }
      };
      const items=trendingCoins.map((coin)=>{
      let profit=coin.price_change_percentage_24h>=0;
          return(
              <Link className={classes.card} to={`/coins/${coin.id}`}>
                  <img src={coin?.image} alt={coin.name} height='80' style={{marginBottom:10}}/>
                  <span>{coin?.symbol}&nbsp;
                  <span style={{color:profit?'#4BB543':'red'}}>{profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%</span></span>
                  <span style={{fontSize:24}}>{symbol}{numComa(coin?.current_price.toFixed(2))}</span>
              </Link>
          );
      });

      return(
        <div className={classes.carousel}>
         <AliceCarousel mouseTracking infinite autoPlayInterval={1000} animationDuration={1000} disableDotsControls responsive={responsive} autoPlay disableButtonsControls items={items} />
        </div>);
};

export default Carousel;
