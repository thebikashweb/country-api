import React from 'react';

import {createTheme} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'

import Routes from './Routes'
import Appbar from './components/Appbar/Appbar'
import Sidebar from './components/Sidebar/Sidebar'

//base style
import './styles/_base.scss'



//create material UI theme 
const theme = createTheme({
  palette: {
    primary: {
      main: '#f2aa26',
      dark: '#f09c01',
    },
    secondary: {
      main: '#11cb5f',
    },
    text: {
      primary: '#373585',
      secondary: '#a4a6b3',
    },
    background: {
      default: '#f7f8fc',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans- serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 8,
  },
})

function App() {

  const [drawerState, setDrawerState] = React.useState(false)

  
  //handle drawer state
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state)
    }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
       {/* appbar component  */}
       <Appbar onClick={handleDrawerState} drawerState={drawerState}/>

      {/* Sidebar  */}             
      <Sidebar onClick={handleDrawerState} drawerState={drawerState}/>
      <Routes />
    </div>
    </ThemeProvider>
  );
}

export default App;
