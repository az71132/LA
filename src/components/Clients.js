import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel"


const ClientsContainers = styled.div`
    height: 50vh ;
    width: 100%;
    // display: flex ;
    justify-content: space-between ;

`;
const ClientsContainersTitle = styled.div`
    height: 12vh ;
    width: 100%;
    display: flex ;
    align-items:center;
    justify-content: center;

`;
const ClientsContainersCarousel = styled.div`
    height: 38vh ;
    width: 90%;
    // display: flex ;
    // justify-content: space-between ;
    margin-left: 5%;
    margin-right: 5%;

`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 80%;
  color: black;
  margin: 0 15px;
  font-size:4em;
  overflow: hidden;

`

const Payper = styled.img`
  font-weight: bold;
  height: 60%;
  cursor: pointer;
`

const Boohoo = styled.img`
  font-weight: bold;
  height: 60%;
  width: 110%;
  cursor: pointer;
`

const Leecooper = styled.img`
  font-weight: bold;
  height: 55%;
  width: 100%;
  cursor: pointer;
`

const Fiffour = styled.img`
  font-weight: bold;
  height: 27%;
//   width: 100%;
  cursor: pointer;
`

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 5 },
];

const Clients = () => {
    return (
        <div>
            <ClientsContainers>
                <ClientsContainersTitle>
                    <h1 style={{ fontSize: 28 }}>Clients</h1>
                </ClientsContainersTitle>
                <ClientsContainersCarousel>
                    <Carousel enableAutoPlay={true} showArrows={true} breakPoints={breakPoints}>
                        <Item><Payper src="https://i.imgur.com/jtfePG2.png" /></Item>
                        <Item><Boohoo src="https://i.imgur.com/mLgPLin.png" /></Item>
                        <Item><Payper src="https://i.imgur.com/4e7VWme.png?1" /></Item>

                        <Item><Leecooper src="https://i.imgur.com/Am8IPeF.png" /></Item>
                        <Item><Boohoo src="https://i.imgur.com/sgp38h4.jpg"/></Item>
                        <Item><Payper src="https://i.imgur.com/sEXHb4Y.png" /></Item>
                        <Item><Boohoo src="https://i.imgur.com/Qesl9dm.jpg" /></Item>
                        <Item><Payper src="https://i.imgur.com/H1wE0uy.jpg" /></Item>
                        <Item><Fiffour src="https://i.imgur.com/fnnS7AH.jpg" /></Item>

                    </Carousel>

                </ClientsContainersCarousel>

            </ClientsContainers>
        </div>
    )
}

export default Clients