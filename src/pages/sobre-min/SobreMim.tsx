import React from "react";
import { Typography } from "@mui/material";
import {Box} from "@mui/material"
import* as sx from "./styles"

export const SobreMim: React.FC = ()=>{
    return(
        <> 
            <Box sx={sx.divPrincipal}>
                <Box sx={{marginX:"2rem", overflow:"hidden" ,overflowWrap:"break-word",}}>
                    <Typography textAlign="justify" marginBottom="4px">Meu nome é Wisly Santos e estou criando este portfólio para compartilhar minha paixão e experiência na área de desenvolvimento de software. Meu objetivo é encontrar soluções inovadoras e proporcionar uma experiência excepcional aos usuários, buscando compreender profundamente suas necessidades e desejos.</Typography>

                    <Typography textAlign="justify" marginBottom="4px">Sou uma pessoa organizada e adoro trabalhar em equipe. Acredito que o diálogo e a colaboração são essenciais para o sucesso de qualquer projeto. Sempre busco compartilhar meus conhecimentos com os colegas e aprender com eles, promovendo um ambiente harmonioso e produtivo.</Typography>

                    <Typography textAlign="justify" marginBottom="4px">Durante o período de dezembro de 2021 a abril de 2023, tive a oportunidade de atuar como Trainee na cidade de Araraquara-SP. Durante esse tempo, participei de projetos utilizando metodologias como React.Js, Next.Js, .dotnet e arquitetura de projeto DDD. Também adquiri habilidades em controle de versão com Git, desenvolvimento web com HTML, CSS, StyleComponent, JavaScript e TypeScript, além de ter trabalhado com bibliotecas e frameworks como DevExtreme, React com TypeScript e realizado testes unitários.</Typography>

                    <Typography textAlign="justify" marginBottom="4px">Minhas competências abrangem uma variedade de áreas, como programação de interface do usuário, programação orientada a objetos (POO), desenvolvimento de front-end, resolução de problemas, atendimento ao cliente e comunicação efetiva. Tenho conhecimentos em tecnologias como Node.js, MongoDB, SASS, React Testing Library, Material-UI, DevExpress e tenho experiência em desenvolvimento de software com React, Next.js, TypeScript, JavaScript, HTML, CSS e GitHub.</Typography>

                    <Typography textAlign="justify" marginBottom="4px">Antes da minha experiência como Trainee, participei de um estágio de quatro meses em Araraquara-SP. Durante esse período, fiz parte da Turma de Formação DotNet, realizada pela Cast Group, onde adquiri conhecimentos em C#, orientação a objetos, padrões e princípios de projetos, banco de dados (SQL), ORM - Dapper, ORM - Entity Framework, HTML, CSS, JavaScript, ASP.Net, ASP.Net WebAPI e Rest, Docker, TypeScript Angular e Scrum.</Typography>

                    <Typography textAlign="justify" marginBottom="4px">Estou animado para continuar crescendo profissionalmente, sempre buscando aprimorar minhas habilidades técnicas e adquirir novos conhecimentos. Meu compromisso é entregar soluções de qualidade, trabalhando com dedicação e perseverança.</Typography>

                    <Typography textAlign="justify" marginBottom="4px">Este portfólio representa minha jornada até o momento e destaca minhas habilidades técnicas e competências. Estou ansioso para novas oportunidades e desafios que possam surgir, e estou confiante de que posso contribuir de forma positiva em projetos futuros.</Typography>
                    
                </Box>
            </Box>         
        </>
    )
}