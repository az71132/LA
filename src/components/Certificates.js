import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel"
import ContactUs from './ContactUs'

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 80%;
  // background-color: blue;
  color: black;
  margin: 0 15px;
  font-size:4em;
  overflow: hidden;

`
const CertificationsContainers = styled.div`
    height: 50vh ;
    width: 100%;
    // display: flex ;
    justify-content: space-between ;

`;

const CertificatesContainersTitle = styled.div`
    height: 12vh ;
    width: 100%;
    display: flex ;
    align-items:center;
    justify-content: center;

`;
const CertificatesContainersCarousel = styled.div`
    height: 38vh ;
    width: 90%;
    // display: flex ;
    // justify-content: space-between ;
    margin-left: 5%;
    margin-right: 5%;


`;


const Sedex = styled.img`
  font-weight: bold;
  height: 25%;
  // width: 10%
  cursor: pointer;
`

const ISO9000 = styled.img`
  font-weight: bold;
  height: 60%;
  // width: 10%
  cursor: pointer;
`

const Title = styled.text`
  font-size: 23px;
  font-weight: 700;
`


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 5 },
];

const Certificates = () => {
  return (
    <div>
        <CertificationsContainers>
        <CertificatesContainersTitle>
          <Title>Certifications & Sustainability</Title>
        </CertificatesContainersTitle>
        <CertificatesContainersCarousel>
          <Carousel breakPoints={breakPoints}>
            <Item><Sedex src="https://i.imgur.com/TQhhUZB.png"/></Item>
            <Item><ISO9000 src="https://i.imgur.com/U6z9D6x.jpg"/></Item>
            <Item><ISO9000 src="https://i.imgur.com/HuDyw1G.jpg"/></Item>
            <Item><Sedex src="https://i.imgur.com/eYVFQfc.png"/></Item>
            <Item><Sedex src="https://i.imgur.com/1YPKvHc.png"/></Item>
            <Item><Sedex src="https://i.imgur.com/ba5Pte7.png"/></Item>
            <Item><Sedex src="https://i.imgur.com/87XHcbC.png"/></Item>
            <Item><ISO9000 src="https://i.imgur.com/cfJUgER.jpg"/></Item>


          </Carousel>

        </CertificatesContainersCarousel>
      </CertificationsContainers>

    </div>
  )
}

export default Certificates