import {createTheme} from '@mui/material';
import { cyan, blueGrey } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette:{
        mode:'dark',
        primary:{
            main: blueGrey[700],
            dark: blueGrey[800],
            light: blueGrey[500],
            contrastText: '#ffffffff', 
        },
        secondary:{
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText:'#ffffffff'
        },
        background:{
            paper:'#303134',
            default:'#202124',            
        },
        
    },
    typography:{
        allVariants:{
            color: 'white'
        },
        button:{
            textTransform: 'none'
        }
    },

}) 