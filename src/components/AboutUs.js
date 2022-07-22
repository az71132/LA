import React from 'react'
import styled from 'styled-components'

const AboutUsContainer = styled.div`
    height: 90vh ;
    width: 100%;
    // display: flex ;
    @media only screen and (max-width: 500px){
      height: 145vh ;
      width: 100%;
  
    }
`;

const Aboutus = styled.div`
    height: 55vh;  
    width: 100%;
    // background-color: blue;
    display: flex ;

`

const AboutTextContainer = styled.div`
    height: 100%;  
    width: 60%;
    // background-color: pink;
    // display: flex ;
    @media only screen and (max-width: 500px){
      height: 100%;  
      width: 100%;
  
    }

`
const AboutPictureContainer = styled.div`
    height: 100%;  
    width: 40%;
    // background-color: purple;
    align-items: center;
    justify-content: center;
    display:flex;
    // display: flex ;
    @media only screen and (max-width: 500px){
      display:none;
  
    }
    

`

const VisionMissionValues = styled.div`
    height: 35vh;  
    width: 100%;
    display: flex ;
    background:lightgrey;
    @media only screen and (max-width: 500px){
      display:block;
      height: 90vh;  
      width: 100%;
      background:lightgrey;

    }
`

const VisionMissionValuesSingleContainer = styled.div`
    height: 100%;  
    width: 33.33333333333333333333333333%;
    @media only screen and (max-width: 500px){
      height: 33%;
      width: 100%;

    }
`

const VisionMissionValuesSingleTitle = styled.div`
height: 35%;  
width: 100%;
display: flex ;

justify-content: center;
align-items: center;
`

const VisionMissionValuesText = styled.div`
  height: 65%;  
  width: 90%;
    // display: flex ;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center;
    text-align: center;
`



const AboutUsImg = styled.img`
  font-weight: bold;
  height: 100%;
  cursor: pointer;
`

const AboutUsTitle = styled.div`
    height: 10vh;  
    width: 100%;
    display: flex ;
    margin-top: 2%;

`
const AboutUsTextContainer = styled.div`
    height: 30vh;  
    width: 100%;
    display: flex ;
    align-items: center;
    text-align: center;

`


const AboutUsText = styled.text`
    margin-left: 20%;
    margin-right: 20%;
    font-size: 17px;
    font-weight: 470;
    @media only screen and (max-width: 500px){
      margin-left: 20%;
      margin-right: 20%;
      font-size: 18px;
      font-weight: 470;
      margin-top: 15%;
  
    }

`

const AboutUs = () => {
  return (
    <div>
      <AboutUsContainer id="about">
        <Aboutus>
          <AboutPictureContainer>
            <AboutUsImg src="https://i.imgur.com/mUrzOZu.png" />
          </AboutPictureContainer>
          <AboutTextContainer>
            <AboutUsTitle>
              <h1 style={{ margin: "auto" }}>About Us</h1>
            </AboutUsTitle>
            <AboutUsTextContainer>
              <AboutUsText>
                Founded in 2015, Lahore Apparel was established by a group of professionals with a drive for excellence. Lahore apparel is a state of the art cut to pack factory with the most skilled labour in the market.  Over just the past few years production has grown 5 fold. We plan to continue this growth and aim to become the largest exporter of Pakistan.

              </AboutUsText>

            </AboutUsTextContainer>
          </AboutTextContainer>



        </Aboutus>
        <VisionMissionValues>
          <VisionMissionValuesSingleContainer>
            <VisionMissionValuesSingleTitle>
              <h1 style={{ margin: "auto" }}>Vision</h1>

            </VisionMissionValuesSingleTitle>
            <VisionMissionValuesText>
              <h3 style={{ fontWeight: 300 }}>Our vision is to dominate globally as a Fashion Apparel Company. A consistently growing company driven by sustainability and professional culture. </h3>
            </VisionMissionValuesText>
          </VisionMissionValuesSingleContainer>
          <VisionMissionValuesSingleContainer>
            <VisionMissionValuesSingleTitle>
              <h1 style={{ margin: "auto" }}>Mission</h1>

            </VisionMissionValuesSingleTitle>
            <VisionMissionValuesText>
              <h3 style={{ fontWeight: 300 }}>Our mission is to be a globally recognized and trusted supplier of flawlessly created garments, in complete compliance with specifications, with consistency in quality and punctuality.</h3>
            </VisionMissionValuesText>

          </VisionMissionValuesSingleContainer>
          <VisionMissionValuesSingleContainer>
            <VisionMissionValuesSingleTitle>
              <h1 style={{}}>Values</h1>

            </VisionMissionValuesSingleTitle>
            <VisionMissionValuesText>
              <h3 style={{ fontWeight: 300 }}>Our values include innovation, integrity, teamwork, inclusion & diversity, customer focus, passion & excellence, environment, our community, and safety.</h3>
            </VisionMissionValuesText>
          </VisionMissionValuesSingleContainer>
        </VisionMissionValues>
      </AboutUsContainer>

    </div>
  )
}

export default AboutUs

