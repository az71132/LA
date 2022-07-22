import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'


const Logo = styled.img`
  font-weight: bold;
  height: 100%;
  cursor: pointer;
`

const Name = styled.text`
  color: #476488;
  font-weight: bold;
  font-size: 32px;
  `
  
const NavBarContainer = styled.div`
    height: 10vh ;
    position: sticky;
    top: 0;
    z-index: 10000000;
    width: 100%;
    display: flex ;
    justify-content: space-between ;
    background-color: white ;
`;

const LeftContainerLogoName = styled.div`
    height: 10vh ;
    top: 0;
    width: 37%;
    background-color: white ;
    display: flex ;
    // justify-content: space-between ;
    align-items: center ;
`;

const ContainerLogoName = styled.div`
    height: 10vh ;
    top: 0;
    width: 24%;
    background-color: white ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
`;

const RightContainerLogoName = styled.div`
    height: 10vh ;
    top: 0;
    width: 39%;
    background-color: white ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
`;
const Navbar = () => {
  return (
    <div>
      <NavBarContainer className='navbar'>
        <LeftContainerLogoName>
          <button>Production Process</button>
        </LeftContainerLogoName>
        <ContainerLogoName>
          <Logo src="https://i.imgur.com/twPtRAG.png" />
          <Name>Lahore Apparel</Name>
        </ContainerLogoName>
        <RightContainerLogoName>

        </RightContainerLogoName>
      </NavBarContainer>
    </div>
  )
}

export default Navbar

