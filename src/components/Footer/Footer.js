import React from "react";
import { IconesContainer, IconesRedesSociais, MainContainer, TextoFooter } from "./styledFooter";

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
