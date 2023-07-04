import {  ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DiplomasService, IListagemDiploma } from "../../services/diplomas/DiplomasService";

export interface IPostCertificadoProps{
    cover?: string,
    titulo?: string,
    body?: string,
    id?: number
}


export const PostCertificado:React.FC<IPostCertificadoProps> = ({ cover, titulo, body, id})=>{

    const theme = useTheme()
    const responsivelMenorSm = 500
    const [rows, setRows] = useState<IListagemDiploma[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const mdDown = useMediaQuery(theme.breakpoints.down("md"))
    const rMSDown = useMediaQuery(theme.breakpoints.down(responsivelMenorSm))


    useEffect(()=>{
        setIsLoading(true)

       DiplomasService.getAll(1)
       .then((result)=>{
        setIsLoading(false)

           if(result instanceof Error){
               alert(result.message)
           }else{
               setRows(result.data)
               setTotalCount(result.totalCount)
           }
       })
    },[])

    return(
        <ImageList cols={mdDown ? rMSDown? 1 :2 : 3} sx={{margin: 0}}>
            {rows.map((row)=>(
                <ImageListItem key={row.id} sx={{width: "auto", height:"auto",}}>
                    <img
                        src={row.img}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )

   /*  return(
        <Box sx={sx.post}>
            <img src={cover} alt={titulo}/>
            <Box sx={sx.postContent}>
                <Typography variant="h1">{titulo} {id}</Typography>
                <Typography variant="body2">{body}</Typography>
            </Box>
        </Box>     
    ) */ 
}