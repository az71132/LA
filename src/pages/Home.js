import styled from 'styled-components'
import React from 'react'
import AboutUs from '../components/AboutUs';
import Clients from '../components/Clients';
import Certificates from '../components/Certificates';
import ContactUs from '../components/ContactUs';
import OrderDetails from '../components/OrderDetails';



const HomeContainer = styled.div`
    height: 90vh ;
    width: 100%;
    display: flex ;

    @media only screen and (max-width: 500px){
      height: 90vh ;
      width: 100%;
      display: block;
    }
`;
const HomebgContainer = styled.div`
  height: 100% ;
  width: 60%;
  display: flex ;
  overflow: hidden;

  @media only screen and (max-width: 500px){
    height: 60% ;
    width: 100%;
    display: flex ;
    overflow: hidden;
  }
`
const HomeTextContainer = styled.div`
  height: 100% ;
  width: 40%;
  display: flex ;
  // background-color: red ;
  align-items: center;
  text-align: center;


  @media only screen and (max-width: 500px){
    height: 40% ;
    width: 100%;
    align-items: center;
    text-align: center;


  }



`

const HomeText = styled.text`
  font-size: 25px;
  font-weight: bold;
  margin: 10%;
  color: #476488;

  @media only screen and (max-width: 500px){
    font-size: 20px;
    font-weight: bold;
    margin: 18%;
    color: #476488;
  }


`

const Homebg = styled.img`
  font-weight: bold;
  height: 100%;
  cursor: pointer;
`

const WhiteSpace = styled.img`
  height: 10vh;

  @media only screen and (max-width: 500px){
    display:none;
  }

`


const Home = () => {
  return (
    <div>
      <HomeContainer>
        <HomeTextContainer>
          <HomeText >Lahore Apparel is one of the fastest growing denim manufacturers in Pakistan. We aspire to revolutionize the textile and apparel industry by using innovative and sustainable business.</HomeText>
        </HomeTextContainer>
        <HomebgContainer>
          <Homebg src="https://i.imgur.com/jWLrGWV.jpg?2" />
        </HomebgContainer>
      </HomeContainer>

      
      <AboutUs/> 

      <Clients/>
      <OrderDetails/>
      <Certificates/> 
      <ContactUs/>
      <WhiteSpace/>

    </div>
  )
}

export default Home

