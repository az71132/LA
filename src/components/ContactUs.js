import React from 'react'
import styled from 'styled-components'

const ContactUsContainer = styled.div`
    height: 50vh ;
    width: 100%;
    display:flex;
    // background-color: yellow;
    @media only screen and (max-width: 500px){
      
    display:block;
    }
`;

const ContactUsContainerLeft = styled.div`
    height: 100% ;
    width: 50%;
    font-size: 23px;
    background-color: #476488;
    margin-top: 1.5%;
    // display: flex;
    @media only screen and (max-width: 500px){
      height: 42% ;
      width: 100%;
      font-size: 17px;
      background-color: #476488;
      margin-top: 0%;
    }

`;

const ContactUsContainerRight = styled.div`
    height: 100% ;
    width: 15%;
    font-size: 23px;
    background-color: #476488;
    margin-top: 1.5%;
    // display: flex;
    @media only screen and (max-width: 500px){
      display:none
    }

`;

const ContactUsInformation = styled.div`
    height: 110% ;
    width: 80%;
    // font-size: 23px;
    background-color: lightgrey;
    text-align: center;


  @media only screen and (max-width: 500px){
    // display:none
    height: 84% ;
    width: 100%;
    // font-size: 23px;
    background-color: lightgrey;
    text-align: center;
    // margin:left:10%;
  }

`;

const BluePadding = styled.div`
  display:none;

  @media only screen and (max-width: 500px){
    height: 23px;
    background-color:#476488;
    display:block;
    margin-bottom: -8%;
  }
`

const GreyPadding = styled.div`
  display:none;

  @media only screen and (max-width: 500px){
    height: 20px;
    background-color:lightgrey;
    display:block;
    margin-bottom: -8%;
  }
`



const ContactUs = () => {
  return (
    <div>
        <ContactUsContainer>
        <BluePadding>
        </BluePadding>
        <ContactUsContainerLeft>
          <h1 style={{ color: "white", marginTop: 30,marginLeft: 50, marginRight: 15 }}>CONTACT US</h1>
          <h3 style={{ color: "white", marginTop: 10, marginLeft: 50, marginRight: 15 }}>Hey, we look forward to working with you.</h3>
          <p style={{ color: "white", marginTop: 10, marginLeft: 50, marginRight: 15, fontSize: 17 }}>Please find all the contact details attached to get in touch.</p>
        </ContactUsContainerLeft>
        <GreyPadding>

        </GreyPadding>
        <ContactUsInformation>
          <h2 style={{ marginTop: 30, marginBottom: 25 }}>CALL US</h2>
          <p>01245162236</p>
          <p>02352353336</p>
          <h2 style={{ marginTop: 30, marginBottom: 25 }}>EMAIL US</h2>
          <p>01245162236</p>
          <p>02352353336</p>
          <h2 style={{ marginTop: 30, marginBottom: 25 }}>LOCATION</h2>
          <p>
            somewhere in lahore
          </p>
        </ContactUsInformation>
        <ContactUsContainerRight>

        </ContactUsContainerRight>
      </ContactUsContainer>
    </div>
  )
}

export default ContactUs