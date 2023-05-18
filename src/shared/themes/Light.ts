import {createTheme} from '@mui/material';
import { cyan, blueGrey } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette:{
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
            paper:'#ffffff',
            default:'#f7f6f3',
            
        }
    },
    typography:{
        allVariants:{
            color: '#303134'
        },
        button:{
            textTransform: 'none'
        }
    }   

}) 