import { BottomNavigationAction, Box, Button, Paper, Typography, useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import { useAppThemeContext } from "../../context";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NightlightIcon from '@mui/icons-material/Nightlight';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

interface IMenuTopProps{
    mostrarButtonSobre?:boolean,
    mostrarMeusProjetos?:boolean,
    mostrarConhecimentos?:boolean,
    mostrarContato?:boolean,

}

export const MenuTop: React.FC<{children : React.ReactNode}> = ({children}) =>{

    const responsivelMenutop = 675.20

    const theme = useTheme()
    const {toggleTheme, themeName} = useAppThemeContext()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))
    const menuTopDown = useMediaQuery(theme.breakpoints.down(responsivelMenutop))
    
    

    return(
    <>
        <Box >
            <Box
            gap={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={menuTopDown ? theme.spacing(10) : theme.spacing(5)}
            component={Paper}/* sx={{width: "100%", height:"60px", background:"white", display: "inline-block"}} */ >
                <Box  justifyContent="flex-start">               
                <BottomNavigationAction 
                    sx={{alignItems: "center"}}
                    label="gitHub"
                    icon={themeName === 'light' ? <NightlightIcon/> : <WbSunnyIcon/>}
                    onClick={toggleTheme}
                    />
                </Box>                        
                <Box justifyContent="center" marginLeft="auto" display="flex" >
                    <Button sx={{paddingY:"0px"}}>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Sobre-mim"
                            >
                            <Typography variant="button">                        
                                Sobre mim                        
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Meus-projetos"
                            >
                            <Typography variant="button">
                                Meus Projetos
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Conhecimentos"
                            >
                            <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" >
                           {smDown ? 'Conhe...' : 'Conhecimentos'}
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Contato"
                            >
                            <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Contato
                            </Typography>
                        </Link>
                    </Button>
                </Box>
                <Box justifyContent="flex-end" marginLeft="auto" marginRight="0px">
                    <Link to="https://www.linkedin.com/in/wisly-santos-2172501a3/">
                        <BottomNavigationAction
                            label="linkedIn"
                            icon={<LinkedInIcon/>}                    
                            />
                    </Link>                    
                    <Link to="https://github.com/Wislysantos" >
                        <BottomNavigationAction
                            label="GitHub"
                            icon={<GitHubIcon/>}
                            />
                    </Link>
                </Box>
            </Box>
        </Box>
        <Box>
            {children}
        </Box>
    </>
    )

}

