import Navbar from './components/Navbar';
import Home from './pages/Home';
import styled from 'styled-components'
import Production from './pages/Production';
import Sustainability from './pages/Sustainability';
import "./App.css"
import React from "react"
import GMap from './components/GMap';
import ContactUsLocation from './pages/ContactUsLocation';


import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const Container = styled.div`
    height: 580vh ;
    width: 100%;
    // display: flex ;
    justify-content: space-between ;
`;


const NavBarContainer = styled.div`
    height: 10vh ;
    position: sticky;
    sticky: top;
    top: 0;
    z-index: 10000000;
    width: 100%;
    display: flex ;
    justify-content: space-between ;
    background-color: white ;
    @media only screen and (max-width: 500px){
      height: 10vh ;
      position: sticky;
      sticky: top;
      top: 0;
      z-index: 10000000;
      width: 100%;
      display: flex ;
      justify-content: space-between ;
      background-color: white ;
    }
`;

const LeftContainerLogoName = styled.div`
    height: 10vh ;
    top: 0;
    width: 31%;
    background-color: white ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    // text-align: center;
    @media only screen and (max-width: 500px){
      width: 40%;
    }
    

`;

const ContainerLogoName = styled.div`
    height: 10vh ;
    top: 0;
    width: 37%;
    // background-color: blue ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    overflow:hidden;
    @media only screen and (max-width: 500px){
      width: 17%;
    }
`;

const RightContainerLogoName = styled.div`
    height: 10vh ;
    top: 0;
    width: 32%;
    // background-color: blue ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    @media only screen and (max-width: 500px){
      width: 42%;
    }
`;

const Logo = styled.img`
  font-weight: bold;
  height: 100%;
  cursor: pointer;
  @media only screen and (max-width: 500px){
    margin:auto;
  }
`
const Name = styled.text`
  color: #476488;
  font-weight: bold;
  font-size: 32px;
  @media only screen and (max-width: 500px){
    display:none;
  }
`

const Button1 = styled.button`
    height: 100%;
    width: 70%;
    margin-left: 17.5%;
    border: none;
    background-color: white;
    font-size: 19px;
    font-weight: bold;
    color: #476488;
    &: hover {
      background: 100px #476488;
      color: white;
   }

   @media only screen and (max-width: 500px){
    // display:none;
    font-size: 17px;
    margin-left: 0%;
    width: 55%;
    // background-color:yellow;

  }

  
`
const Button2 = styled.button`
    // align-items: center;
    // display: flex;
    // justify-content: center;
    height: 100%;
    width: 70%;
    color: #476488;
    margin-right: 17.5%;
    border: none;
    background-color: white;
    font-size: 19px;
    font-weight: bold;
    transition: all 0.3s ease;
    &: hover {
      background: 100px #476488;
      color: white;
    }

    @media only screen and (max-width: 500px){
      // display:none;
      font-size: 17px;
      margin-left: 0%;
      width: 55%;
      // background-color:blue


    }

  
`




function App() {

  return (

    // <Container>
    <div>

      <NavBarContainer>
        <LeftContainerLogoName>
          <Button1 onClick={event => window.location.href = '/'}>Home</Button1>
          <Button2 onClick={event => window.location.href = '/sustainability'}>Sustainability</Button2>

        </LeftContainerLogoName>
        <ContainerLogoName>
          <Logo src="https://i.imgur.com/twPtRAG.png" />
          <Name>Lahore Apparel (pvt.) Ltd</Name>
        </ContainerLogoName>
        <RightContainerLogoName>

          <Button1 onClick={event => window.location.href = '/production'}>Production</Button1>
          <Button2 onClick={event => window.location.href = '/contactus'}>Contact</Button2>


        </RightContainerLogoName>
      </NavBarContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/production" element={<Production />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contactus" element={<ContactUsLocation />} />

        </Routes>
      </Router>
      {/* <GMap/> */}

    </div>


  );
}

export default App;

