import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #bf2d3a;
    display: flex;
    justify-content: center;
    height: 13vh;
    border-top: 1px solid black;
    color: white;
    font-size: smaller;
    
    @media(max-width: 550px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: x-small;
    }
`

export const IconesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TextoFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconesRedesSociais = styled.img`
    height: 5vh;
    margin: 5px;
`


export default class Footer extends React.Component {
    render() {
        return (
            <div>
            <MainContainer>
                
                <IconesContainer>

                    <IconesRedesSociais src='/Img/Facebook.png' alt="Facebook" />
                    <IconesRedesSociais src='/Img/Instagram.png' alt="Instagram" />
                    <IconesRedesSociais src='/Img/Twitter.png' alt="Twitter" />
                        Contato: labeninjas@gmail.com | (21) 3344-2121

                </IconesContainer>  

                <TextoFooter>
                <p>© Copyright 2021-2022 - LabeNinjas. CNPJ: 07.789.302/0001-46/Inscrição Estadual: 97.386.05-2 - Avenida Francisco Porto, 153 - Rio de Janeiro/RJ - Brasil</p>
                </TextoFooter>
                
            </MainContainer>
            </div>
        )
    }
}
