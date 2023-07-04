import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import * as sx  from "./styles" 
import {Box} from "@mui/material"
import TypeIt from "typeit-react";


export const Home: React.FC = ()=>{

    const xs = 509.95
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const xss = useMediaQuery(theme.breakpoints.down(xs))


    return(
        <>
            <Box component="span" sx={sx.divPrincipal}>
                <Box >
                <Typography fontSize={mdDown ? '9px' : '15px'}>Hello, word!_</Typography>
                <Typography fontSize={mdDown ? xss ? '2rem': '3rem' : '5rem'}>Olá, sou Wisly Santos...</Typography>
                <Typography  fontSize={mdDown ? xss ? '0.7em' : '0.9em':'1.5em' }sx={sx.paragrafo}><TypeIt getBeforeInit={(instance)=>{                    
                    instance.type("Desenvolvedor Front End - React.JS ")
                    .pause(1500)
                    .delete(9)
                    .pause(300)
                    .type("TypeScript. ")
                    .pause(1500)
                    .delete(12)
                    .pause(300)
                    .type("Next.JS ")
                    return instance
                }}/> </Typography>
                </Box>
                      
            </Box>
        </>
    )
}