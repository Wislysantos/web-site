import { Box, Typography } from "@mui/material";
import React from "react";
import * as sx from "./styles"

export interface IPostCertificadoProps{
    cover?: string,
    title?: string,
    body?: string,
    id?: number
}

export const PostCertificado:React.FC<IPostCertificadoProps> = ({ cover, title, body, id})=>{
    return(
        <Box sx={sx.post}>
            <img src={cover} alt={title}/>
            <Box sx={sx.postContent}>
                <Typography variant="h1">{title} {id}</Typography>
                <Typography variant="body2">{body}</Typography>
            </Box>
        </Box>     
    )
}