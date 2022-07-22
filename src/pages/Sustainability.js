import React from 'react'
import styled, { keyframes } from 'styled-components'
import Certificates from '../components/Certificates'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import{
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Slider from '../components/Slider';

const SustainabilityTitleAndPicContainer = styled.div`
    height: 90vh ;
    width: 100%;
    // background-color: yellow;
    // display: flex ;
    justify-content: space-between ;
    overflow: hidden;

    position: relative;
`;

const SustainabilityIntroTopTop= styled.div`
    height: 10vh ;
    width: 100%;
    display: flex;
    background-color: #80a04a;
    align-items: center;
    text-align: center;
    justify-content: center;
    





`;

const SustainabilityIntroTopTopText= styled.text`
color: white;
font-weight: bold;
font-size: 18px;
margin-top:3%;

@media only screen and (max-width: 500px){
    font-size: 15px;
 }



`;

const SustainabilityIntroTopBottom= styled.div`
    height: 10vh ;
    width: 100%;
    display: flex;
    background-color: #80a04a;
    align-items: center;
    text-align: center;
    justify-content: center;

`;



const SustainabilityIntroTopBottomText= styled.text`
color: white;
font-weight: bold;
font-size: 22px;
margin-bottom: 3%;
@media only screen and (max-width: 500px){
    font-size: 17px;
    margin-bottom: 10%;
    margin-left:5%;
    margin-right:5%;
 }
`;

const SustainabilityIntroMid = styled.div`
    height: 45vh ;
    width: 100%;
    display: flex;
    background-color: #80a04a;
    @media only screen and (max-width: 500px){
        height: 66vh ;
     }


`;

const SustainabilityIntroBottom = styled.div`
    height: 4vh ;
    width: 100%;
    display: flex;
    background-color: #80a04a;


`;

const SustainabilityInnerIntro = styled.div`
    height: 100% ;
    width: 60%;
    margin: auto;
    // background-color: purple;
    display: flex ;

    @media only screen and (max-width: 500px){
        display:block;
        width: 45%;
     }
    // justify-content: space-between ;
    // overflow: hidden;
`;

const SustainabilityIntroImg = styled.div`
    height: 100% ;
    width: 33.33333%;
    // display: flex ;
    // justify-content: space-between ;
    overflow: hidden;

    @media only screen and (max-width: 500px){
        height: 33.33333%;
        width: 100%;
     }
`;


const MainImg = styled.img`
    width: 100%;
    @media only screen and (max-width: 500px){
       height : 100%; 
       width: 400%  ;
       position:absolute;
       left: -75%; 
       opacity: 60%;
    }

`

const OtherImg = styled.img`
    width: 100%;
    

`

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-150px); }
    25% { opacity: 1; transform: translateY(0); }
    // 75% { opacity: 1; transform: translateY(0); }
    // 100% { opacity: 0; transform: translateY(-150px); }

`

const SustainabilityTitle = styled.span`
    position: absolute;
    font-size: 38px;
    font-weight: bold;
    margin-left: 60%;
    margin-top: 15%;
    color: #476488;
    display:inline-block;
    // opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    @media only screen and (max-width: 500px){
        display:none;
     }

`

const SustainabilityTitle2 = styled.span`
    position: absolute;
    font-size: 38px;
    font-weight: bold;
    margin-left: 60%;
    margin-top: 15%;
    color: #476488;
    display:inline-block;
    // opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    @media only screen and (max-width: 500px){
        font-size: 30px;
        margin-left:20%;
        margin-top: 80%;
        position:absolute;
     }

`

const Sustainability = () => {
    return (
        <div>
            <SustainabilityTitleAndPicContainer>
                <SustainabilityTitle>SUSTAINABILITY</SustainabilityTitle>
                <MainImg src="https://i.imgur.com/BgXhAsQ.jpg"></MainImg>
                <SustainabilityTitle2>SUSTAINABILITY</SustainabilityTitle2>
                <Link to="/">
                    <ArrowBackIcon style={{ fontSize: 32, color: "#476488", marginLeft:20, marginTop:20, position:"absolute"}}/>
                </Link>
            </SustainabilityTitleAndPicContainer>
            <SustainabilityIntroTopTop>
                <SustainabilityIntroTopTopText>
                We at Lahore Apparel, pride ourselves with sustainable and innovative work practices.
                    </SustainabilityIntroTopTopText>
                
            </SustainabilityIntroTopTop>
            <SustainabilityIntroTopBottom>
                <SustainabilityIntroTopBottomText>
                Solutions in which the consumer the producer and the planet work hand in hand.

                </SustainabilityIntroTopBottomText>

            </SustainabilityIntroTopBottom>
            <SustainabilityIntroMid>
                <SustainabilityInnerIntro>

                    <SustainabilityIntroImg>
                        <OtherImg src="https://i.imgur.com/QU2POJs.jpg?1"></OtherImg>
                    </SustainabilityIntroImg>

                    <SustainabilityIntroImg>
                        <OtherImg src="https://i.imgur.com/2eCCaCQ.jpg?1"></OtherImg>
                    </SustainabilityIntroImg>

                    <SustainabilityIntroImg>
                    <OtherImg src="https://i.imgur.com/ThGJqsH.jpg?1"></OtherImg>
                    </SustainabilityIntroImg>
                    

                </SustainabilityInnerIntro>

            </SustainabilityIntroMid>
            <SustainabilityIntroBottom>
                
            </SustainabilityIntroBottom>
            {/* <Slider/> */}
            <Certificates/>
        </div>
    )
}

export default Sustainability