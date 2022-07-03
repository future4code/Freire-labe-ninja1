import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #bf2d3a;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
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
// `