import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar';
import Navbar from './comp/Navbar';
import Homepage from "./Homepage";
import Land from "./Land.js";
import Coins from "./Coins";
import NewsSection from './Components/NewsSection'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Particles from "react-tsparticles";

 const App=()=> {
  const useStyles=makeStyles(()=>({
    App:{
      backgroundColor:"#252A34",
      color:"white",
      height:"100vh"
    }
  }));
  // #FF7A19 #212121
  const classes=useStyles();

  const particlesInit = (main) => {
    // console.log(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const darkTheme = createTheme({
    palette: {
      primary: {main:'#252A34'},
      type:'dark'
    },
  });
  return (
  <>
    
    <ThemeProvider theme={darkTheme}>
    <div className={classes.App}>
      <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
           // resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FF2E63",
          },
          links: {
            color: "#08D9D6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> 
    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route exact path="/" element={<Land/>} />
        <Route exact path="/home" element={<Homepage/>} />
        <Route exact path="/coins/:id" element={<Coins/>} />
        <Route exact path="/articles" element={<NewsSection/>}/>
        <Route exact path="/demo" element={<NewsSection/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
    </>
  );
}
export default App;
