import { Box, Typography } from "@mui/material";
import React from "react";
import TypeIt from "typeit-react";
import * as sx from './styles'

export const MeusProjetos: React.FC = ()=>{

    return(
        <Box sx={sx.divPrincipal}>
            <Typography fontSize="8rem"><TypeIt getBeforeInit={(instance)=>{                    
                instance.type('Em Construção').pause(1500).type(".").pause(1500).type(".").pause(1500).type(".").pause(1500)
                return instance
            }}></TypeIt></Typography>
        </Box>
    )

}