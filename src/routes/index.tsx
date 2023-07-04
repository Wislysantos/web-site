import {Routes, Route, Navigate} from "react-router-dom"
import { useAppDrawerConetxt } from "../shared/context";
import {useEffect} from "react"
import { Home } from "../pages/home/Home";
import { SobreMim } from "../pages/sobre-min";
import { MeusProjetos } from "../pages/meus-Projetos";
import { Conhecimentos } from "../pages/conhecimentos";
import { Contato } from "../pages/contato";


export const AppRouter = () => {
    const {setDrawerOption} = useAppDrawerConetxt();

    useEffect(()=>{
        setDrawerOption([
            {
                label : 'Home',
                path:'/Home'
            },
            {
                label : 'Sobre mim',
                path:'/Sobre-mim'
            }
        ])
    },[])
    
    return(
        <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Sobre-mim" element={<SobreMim/>}/>
            <Route path="/Meus-projetos" Component={MeusProjetos}/>
            <Route path="/Conhecimentos" Component={Conhecimentos}/>

            <Route path="*" element={<Navigate to="/Home"/>}/>
        </Routes>
    )
};