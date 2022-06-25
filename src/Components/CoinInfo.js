import { Button, CircularProgress, createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { HistoricalChart } from '../Api/Api';
import { CurrencyState } from '../CurrContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Days } from '../Api/Data';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const useStyles=makeStyles((theme)=>({
container:{
    width:"70%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:25,
    padding:40,
    [theme.breakpoints.down("md")]:{
        width:"100%",
        marginTop:0,
        padding:"0 20px 20px 20px"
    }
},
buttons:{
    width:150,
    height:50,
    "&:focus":{
        backgroundColor:"#FF2E63"},
    "&:hover":{
        color:"white",
        backgroundColor:"#FF2E63",
        transition:"0.4s ease-in-out"
    },
}
}));
const CoinInfo = ({coin}) => {
    const [coinHistory,setCoinHistory]=useState();
    const [days,setDays]=useState(1);
    const {currency}=CurrencyState();
    // const fetchHistory=async()=>{
    //     const {data}= await axios.get(HistoricalChart(coin.id,days,currency));
    //     setCoinHistory(data.prices);
    // }
    useEffect(()=>{
        const fetchHistory=async()=>{
            const {data}= await axios.get(HistoricalChart(coin.id,days,currency));
            setCoinHistory(data.prices);
        }
        fetchHistory();   
    },[currency,days,coin.id]);
    const darkTheme = createTheme({
        palette: {
          primary: {main:'#212121'},
          type:'dark'
        },
      });
      const classes=useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
        <div className={classes.container}>
            {!coinHistory?(<CircularProgress style={{color:"#08D9D6"}} size={250} thickness={2}/>):(
                <>
                    <Line
                        data={{
                            labels:coinHistory?.map(coin=>{
                                let date= new Date(coin[0]);
                                let time=date.getHours()>12?`${date.getHours()}:${date.getMinutes()} PM`:`${date.getHours()}:${date.getMinutes()} AM`;
                                return days===1?time:date.toLocaleDateString();
                            }),
                            datasets:[{
                                data: coinHistory?.map(coin=>coin[1]),
                                label: `Price (Past ${days} Days) in ${currency}`,
                                borderColor:"#FF2E63"
                            }],
                        }}
                        options={{
                            elements:{
                                point:{
                                    radius:1
                                }
                            }
                        }}
                    />
                    <div style={{display:"flex",justifyContent:"space-around",width:"100%",marginTop:20}}>
                        {Days.map(day=>(
                            <Button key={day.value} variant="outlined" className={classes.buttons}  onClick={()=>setDays(day.value)}>{day.label}</Button>
                        ))}
                    </div>
                </>
            )}
        </div>
    </ThemeProvider>
  )
}

export default CoinInfo;