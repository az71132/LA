import React from 'react'
import styled from "styled-components"

const OrderDetailsContainer = styled.div`
height: 30vh ;
width: 100%;
display: flex ;
justify-content: space-between ;
background-color: #476488 ;

@media only screen and (max-width: 500px){
  height: 13vh ;
  width: 100%;
  display: flex ;
  justify-content: space-between ;
  background-color: #476488 ;
}
`;

const OrderDets = styled.div`
height: 60% ;
margin-left:2.5%;
margin-right:2.5%;
margin-top:2.5%;
width: 20%;
display: block ;
justify-content: space-between ;
// background-color: pink ;
text-align:center;
align-items:center;
justify-content:center;
color: white;

`;

const Title = styled.text`
  font-weight: 500;
  font-size:33px;

  @media only screen and (max-width: 500px){
    font-weight: 600;
    font-size:13.2px
  }



`;

const Info = styled.text`

  font-weight: 400;
  font-size:17px;

  @media only screen and (max-width: 500px){

    font-size:9px
  }



`;





const OrderDetailsLapTop = styled.div`
  // display: inline;

`

// const OrderDetailsBottom = styled.div`
//   display:  inline;
// `


const OrderDetails = () => {
  return (
    <div>
        <OrderDetailsContainer>
          <OrderDets>
            <Title><p style={{marginTop: 24}}> 200,000</p></Title>
            <Info>  Monthly Capacity</Info>
          </OrderDets>
          <OrderDets>
          <Title><p style={{marginTop: 24}}> 500</p></Title>
            <Info>Employees </Info>
          </OrderDets>
          <OrderDets>
          <Title><p style={{marginTop: 24}}> 100,000 sqft</p></Title>
            <Info> Production Area  </Info>
          </OrderDets>
          <OrderDets>
            <Title><p style={{marginTop: 24 }}> 100</p></Title>
            <Info>Satisfaction Rate</Info>
          </OrderDets>



        </OrderDetailsContainer>
    </div>
  )
}

export default OrderDetails