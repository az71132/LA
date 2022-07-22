import React from 'react'
import styled, { keyframes } from 'styled-components'
import BallotIcon from '@mui/icons-material/Ballot';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FactoryIcon from '@mui/icons-material/Factory';
import TextureIcon from '@mui/icons-material/Texture';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Gesture from '@mui/icons-material/Gesture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductionProcessOne from '../components/ProductionProcessOne';
import ProductionProcess from '../components/ProductionProcess';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



const Back = styled.div`
@media only screen and (max-width: 500px){
  display:none;
 }

`
const animation = keyframes`
    0% { opacity: 0; transform: translateY(-150px); }
    25% { opacity: 1; transform: translateY(0); }
    // 75% { opacity: 1; transform: translateY(0); }
    // 100% { opacity: 0; transform: translateY(-150px); }

`

const ProductionTitle = styled.span`
    font-size: 38px;
    font-weight: bold;
    margin-left: 21%;
    margin-top: 25%;
    color: #476488;
    display:inline-block;
    // opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;

`
const ProductionTitle2 = styled.span`

    display:none;
    @media only screen and (max-width: 500px){
      font-size: 35px;
      font-weight: bold;
      // margin-left: -300%;
      margin-top: 50%;
      margin-right: 0%;
      margin-left: 9%;
      color: #476488;
      display:inline-block;
      position:absolute;
      // opacity: 0;
      animation-name: ${animation};
      animation-duration: 6s;
      animation-fill-mode: forwards;
    }

    // animation-iteration-count: infinite;

`

const ProductionDesc = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 8%;
    margin-right: 18%;
    margin-top: 5%;
    text-align: center;
    color: #476488;
    display:inline-block;
    // opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;

`

const ProductionDesc2 = styled.span`
    display:none;
  @media only screen and (max-width: 500px){
    font-size: 20px;
    font-weight: bold;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 65%;
    text-align: center;
    color: #476488;
    display:inline-block;
    // opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    position: absolute;
    // animation-iteration-count: infinite;
  }

`

const ProductionContainer = styled.div`
    height: 165vh ;
    width: 100%;
    // display: flex ;
    justify-content: space-between ;
`;

const ProductionContainerLanding = styled.div`
    height: 90vh ;
    width: 100%;
    display: flex ;
    justify-content: space-between ;
    // overflow:hidden;
    // position: relative;
    position:relative;


`;

const ProductionContainerLandingLeft = styled.div`
    height: 100%;
    width: 40%;
    background-color: #dfe2e5;
    // display: flex ;

    @media only screen and (max-width: 500px){
    width: 100%;   
    position:relative;
 
    }
`;

const ProductionContainerLandingRight = styled.div`
    height: 100%;
    width: 60%;
    background-color: #dfe2e5;
    // display: flex ;
    @media only screen and (max-width: 500px){
      display:none;
      width: 0%;
    }

`;




const ProductionContainerGap = styled.div`
    height: 5vh ;
    width: 100%;
    align-items: center;
    text-align: center;
    // background-color: yellow;
    // background-color: #476488;
`;



const ProductionBG = styled.img`

  height: 100%;
  @media only screen and (max-width: 500px){
    opacity: 40%;
    position:relative;
  }
`

const Production = () => {

  return (
    <div>
      <ProductionContainer>
        <ProductionContainerLanding>
          <ProductionContainerLandingLeft>
            <Back>
            <Link to="/">
              <ArrowBackIcon style={{ fontSize: 32, color: "#476488", marginLeft: 20, marginTop: 20, position: "absolute" }} />
            </Link>
            </Back>

            <ProductionBG src="https://i.imgur.com/hhHAAHv.jpg?1" />
          </ProductionContainerLandingLeft>
          <ProductionContainerLandingRight>
            <ProductionTitle>Production Process</ProductionTitle>
            <ProductionDesc>An order goes through a systemised pipeline where we serve from cutting of fabric all the way to packing of finalized garments. The complete pipeline has been explained step-wise below.</ProductionDesc>
          </ProductionContainerLandingRight>
          <ProductionTitle2>Production Process</ProductionTitle2>
          <ProductionDesc2>An order goes through a systemised pipeline where we serve from cutting of fabric all the way to packing of finalized garments. The complete pipeline has been explained step-wise below.</ProductionDesc2>
          
        </ProductionContainerLanding>

        <ProductionContainerGap>

        </ProductionContainerGap>
    







      <ProductionProcess/>
      </ProductionContainer>

    </div>
  )
}

export default Production
