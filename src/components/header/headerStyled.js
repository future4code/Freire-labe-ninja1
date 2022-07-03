import styled from "styled-components"

 import styled from "styled-components"

 export const HeaderContainer = styled.div`
   border: 1px solid black;
   background-color: #ffcef9;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 12vh;
   padding: 0px 20px 0px 20px;
   @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
     font-size: 10px;
 `
 export const ButtonCart = styled.div`
   display: flex;
   cursor: pointer;
   transition: all 0.2s ease;
   background-color: #ffcef9;
  
   button {
     background-color: #ffcef9;
     height: 5vh;
     margin: 5px;
   }

   img {
     height: 5vh;
     margin: 5px;
   }
 `

