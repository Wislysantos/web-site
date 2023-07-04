import React from "react";
import { Box } from "@mui/material";
import { PostCertificado } from "../../shared/components";
import* as sx from "./styles"


export const Conhecimentos: React.FC = ()=>{
    return(
        <>
            <Box  sx={sx.divPrincipal} >
               <PostCertificado/> 
            </Box>
        </>
    )
}