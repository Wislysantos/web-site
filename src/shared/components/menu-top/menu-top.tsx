import { BottomNavigationAction, Box, Button, Paper, Typography, useTheme } from "@mui/material"
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
    const theme = useTheme()
    const {toggleTheme, themeName} = useAppThemeContext()

    return(
    <>
        <Box >
            <Box
            gap={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}/* sx={{width: "100%", height:"60px", background:"white", display: "inline-block"}} */ >
                <Box  justifyContent="flex-start">               
                <BottomNavigationAction 
                    sx={{alignItems: "center"}}
                    label="gitHub"
                    icon={themeName === 'light' ? <NightlightIcon/> : <WbSunnyIcon/>}
                    onClick={toggleTheme}
                    />
                </Box>                        
                <Box justifyContent="center" marginLeft="auto" display="flex">
                    <Button >
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Sobre-mim"
                            >
                            <Typography textTransform="none"  >                        
                                Sobre mim                        
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Meus-projetos"
                            >
                            <Typography >
                                Meus Projetos
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Conhecimentos"
                            >
                            <Typography >
                            Conhecimentos
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{textDecoration:"none"}}
                            to="/Contato"
                            >
                            <Typography >
                            Contato
                            </Typography>
                        </Link>
                    </Button>
                </Box>
                <Box justifyContent="flex-end" marginLeft="auto" >
                <BottomNavigationAction
                    label="linkedIn"
                    icon={<LinkedInIcon/>}
                />
                <BottomNavigationAction
                    label="GitHub"
                    icon={<GitHubIcon/>}
                />
                </Box>
            </Box>
        </Box>
        <Box>
            {children}
        </Box>
    </>
    )

}

