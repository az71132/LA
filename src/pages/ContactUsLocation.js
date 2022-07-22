import React, { useRef } from 'react'
import ContactUs from '../components/ContactUs'
import GMap from '../components/GMap'
import styled, { keyframes } from 'styled-components'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useState } from 'react';
import emailjs from '@emailjs/browser';



const ProductionLandingContainer = styled.div`
    height: 90vh ;
    width: 100%;
    background-color:#e8e8e8;
    display: flex;
    overflow: hidden;

`;

const ProductionLandingContainerLeft = styled.div`
    height: 100% ;
    width: 49.2%;
    background-color::#e8e8e8
    overflow: hidden;


  
`;

const ProductionLandingContainerRight = styled.div`
height: 100% ;
width: 50.8%;
background-color:#e8e8e8;
@media only screen and (max-width: 500px){
  display:none;
}
`;
const ContactUsImg = styled.img`
height:100%;
@media only screen and (max-width: 500px){
  height:110%;
  opacity:40%;
}

`;

const FindUs = styled.div`
height: 20vh ;
width: 100%;
background-color:#476488;
text-align: center;
align-items: center;
justify-content: center;
display: flex;

`;

const ContactUsT = styled.div`
height: 15vh ;
width: 100%;
background-color:white;
text-align: center;
align-items: center;
justify-content: center;
display: flex;

`;

const ContactUsSubT = styled.div`
height: 5vh ;
width: 100%;
background-color:white;
// text-align: center;
// align-items: center;
justify-content: center;
display: flex;

`;

const ContactUsInputContainerTop = styled.div`
height: 25vh ;
width: 100%;
display:flex;
background-color:white;

`;

const ContactUsInputContainerBottom = styled.div`
height: 25vh ;
width: 100%;
display:flex;
background-color:white;
text-align: center;
align-items: center;
justify-content: center;
display: flex;

`;

const ContactUsInputContainerLeft = styled.div`
height: 100% ;
width: 50%;
// background-color:pink;
align-items: center;
justify-content:center;
// display:flex;

`;

const ContactUsInputContainerRow = styled.div`
height: 50% ;
width: 100%;
// background-color:gold;
align-items: center;
justify-content:center;
display:flex;

`;



const InputLeft = styled.input`
    padding: 10px;
    border-color: #476488;
    border-radius: 5px;
    border-width:1.3px;
    height: 30%;
    width: 70%;
    margin-left: 10%;
    
`

const InputRight = styled.input`
    padding: 10px;
    border-color: #476488;
    border-radius: 5px;
    border-width:1.3px;
    height: 30%;
    width: 70%;
    margin-right: 10%;
    
`

const InputInfo = styled.textarea`
    padding: 10px;
    border-color: #476488;
    border-radius: 5px;
    border-width:1.3px;
    height: 65%;
    width: 80%;
    
`

const ContactUsInputContainerRight = styled.div`
height: 100% ;
width: 50%;
// background-color:purple;

`;

const SubmissionButtonContainer = styled.div`
height: 15vh ;
width: 100%;
// background-color:purple;
align-items: center;
justify-content:center;
display:flex;

`;

const SubmissionButton = styled.button`
  height: 50%;
  width: 17%;
  border-radius: 5px;
  color: white;
  background-color: #476488;
  border: none;
  // type: submit;

  @media only screen and (max-width: 500px){
   width:35%;
  }
  
`;



const animation = keyframes`
    0% { opacity: 0; transform: translateY(-150px); }
    25% { opacity: 1; transform: translateY(0); }
    // 75% { opacity: 1; transform: translateY(0); }
    // 100% { opacity: 0; transform: translateY(-150px); }

`

const ContactUsTitle = styled.span`
    font-size: 45px;
    font-weight: bold;
    margin-left: 25%;
    margin-top: 40%;
    color: #476488;
    display:inline-block;
    // opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;

`

const ContactUsTitle2 = styled.span`

    display:none;
    @media only screen and (max-width: 500px){
      font-size: 45px;
      font-weight: bold;
      margin-left: -30%;
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

const Spacebw = styled.div`
  height: 2vh;
  width: 100%;
`

const Back = styled.div`
@media only screen and (max-width: 500px){
  display:none;
 }

`


const ContactUsLocation = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3v8th2g', 'template_urklbli', form.current, 'JWIQyyG8Bf-E-BPZ1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div>
      <ProductionLandingContainer>
        <ProductionLandingContainerLeft>
          <Back>


          <Link to="/">
            <ArrowBackIcon style={{ fontSize: 32, color: "#476488", marginLeft: 20, marginTop: 20, position: "absolute" }} />
          </Link>
          </Back>
          <ContactUsImg src="https://i.imgur.com/CxesMz1.png" />

        </ProductionLandingContainerLeft>
        <ProductionLandingContainerRight>
          <ContactUsTitle>Get In Touch</ContactUsTitle>
        </ProductionLandingContainerRight>
        <ContactUsTitle2>Get In Touch</ContactUsTitle2>

      </ProductionLandingContainer>
      <FindUs><h1 style={{ color: "white", fontSize: 40 }}>Find Us</h1></FindUs>

      <div><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Lahore%20Apparel%20(pvt.)%20Ltd,%20Rohi%20Nala,%2017%20km%20Atta%20Bakhsh%20Rd,%20off%20Ferozepur%20Road,%20Lahore+(Lahore%20Apparel%20(pvt.)%20Ltd)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">wearable trackers</a></iframe></div>
      <ContactUsT><h1 style={{ color: "#476488", fontSize: 40 }}>Contact Us</h1></ContactUsT>
      <ContactUsSubT><h1 style={{ color: "#476488", fontSize: 18, marginLeft: 20, marginRight:20 }}>Please send us a message and we will get back as soon as possible.</h1></ContactUsSubT>
      {/* <ContactUsInputContainerTop> */}

      <form ref={form} onSubmit={sendEmail}>
        <ContactUsInputContainerTop>
          <ContactUsInputContainerLeft>
          <ContactUsInputContainerRow>
            <InputLeft placeholder="Your Name" name="name"></InputLeft>
            </ContactUsInputContainerRow>
            <ContactUsInputContainerRow>
            <InputLeft placeholder="Your Company" name="company"></InputLeft>
            </ContactUsInputContainerRow>

          </ContactUsInputContainerLeft>
          <ContactUsInputContainerRight>
          <ContactUsInputContainerRow>
            <InputRight type="email" placeholder="Your Email" name="email"></InputRight >
            </ContactUsInputContainerRow>
          <ContactUsInputContainerRow>
            <InputRight placeholder="Your Contact Number" name="number"></InputRight>
          </ContactUsInputContainerRow>

          </ContactUsInputContainerRight>
        </ContactUsInputContainerTop>
        <ContactUsInputContainerBottom>
          <InputInfo placeholder="Your Message" name="message"></InputInfo>
        </ContactUsInputContainerBottom>
        <SubmissionButtonContainer>
        <SubmissionButton type="submit">
          <h2>SEND</h2>
        </SubmissionButton>
      </SubmissionButtonContainer>
      </form>
      

      <Spacebw>

      </Spacebw>
      <ContactUs />
      <Spacebw>

      </Spacebw>
      <Spacebw>

      </Spacebw>
      <Spacebw>

      </Spacebw>
      <Spacebw>

      </Spacebw>
    </div>
  )
}

export default ContactUsLocation