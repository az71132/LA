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
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



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
      margin-left: -86%;
      margin-top: 80%;
      color: #476488;
      display:inline-block;
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

const ProductionContainer = styled.div`
    height: 195vh ;
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

`;

const ProductionContainerLandingLeft = styled.div`
    height: 100%;
    width: 40%;
    background-color: #dfe2e5;
    // display: flex ;

    @media only screen and (max-width: 500px){
    width: 100%;    
    }
`;

const ProductionContainerLandingRight = styled.div`
    height: 100%;
    width: 60%;
    background-color: #dfe2e5;
    // display: flex ;
    @media only screen and (max-width: 500px){
      display:none;
    }

`;



const Stitching = styled.img`
  font-weight: bold;
  height: 60%;
  width: 60%;
  cursor: pointer;
  margin: auto;
`

const Circle = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #476488;
  border-radius: 50%;
  margin:auto;
`

const ProductionContainerGap = styled.div`
    height: 5vh ;
    width: 100%;
    align-items: center;
    text-align: center;
    // background-color: yellow;
    // background-color: #476488;
`;


const ProductionContainerRow = styled.div`
    height: 43vh ;
    width: 100%;
    display: flex ;
    // background-color:red;
    // justify-content: space-between ;
`;

const ProductionContainerStep = styled.div`
    height: 100% ;
    width: 100%;
    // display: flex ;
    // justify-content: space-between ;
`;

const ProductionContainerStepLogo = styled.div`
    height: 38% ;
    width: 100%;
    // display: flex ;
    // justify-content: space-between ;
`;

const ProductionContainerStepTitle = styled.div`
    height: 22% ;
    width: 100%;
    display: flex ;
    // justify-content: space-between ;
`;

const ProductionContainerStepDesc = styled.div`
    height: 40% ;
    width: 100%;
    align-items: center;
    text-align: center;
  
    // display: flex ;
    // justify-content: space-between ;
`;


const ProductionBG = styled.img`

  height: 100%;
  @media only screen and (max-width: 500px){
    opacity: 40%;
  }
`




const ProductionProcessTwo = () => {
  return (


    <ProductionContainerStep>
    <ProductionContainerStepLogo>
      <Circle>
        <CheckroomIcon
          style={{ fontSize: 60, color: "white", margin: "auto" }}
        />
      </Circle>
    </ProductionContainerStepLogo>
    <ProductionContainerStepTitle>
      <h2 style={{ margin: "auto", fontSize:21 }}> 2. Sampling</h2>
    </ProductionContainerStepTitle>
    <ProductionContainerStepDesc>
      <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>After a sample fee is deposited we start sample porduction to ensure all aspects of the garment design and sizing are approved before starting bulk production.</p>
    </ProductionContainerStepDesc>
  </ProductionContainerStep>


  )
}

export default ProductionProcessTwo