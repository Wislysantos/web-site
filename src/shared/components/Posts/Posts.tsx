import React from "react"
import { IPostCertificadoProps, PostCertificado } from "../post-certificado/PostCertificado"
import {Box} from "@mui/material"

interface IPostsProps{
    posts: IPostCertificadoProps,
}

export const Posts: React.FC<IPostsProps> = ({posts})=>{
    return(
        <Box>
            {/* {posts.map((post)=>(
                <PostCertificado
                    cover={post.cover}
                    title={post.title}
                    body={post.body}
                    key={post.id}
                    id={post.id}
                />
            ))}  */}
        </Box>
    )
}