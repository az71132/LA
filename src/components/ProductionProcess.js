import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel"
import ProductionProcessOne from './ProductionProcessOne';
import ProductionProcessTwo from './ProductionProcessTwo';
import BallotIcon from '@mui/icons-material/Ballot';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FactoryIcon from '@mui/icons-material/Factory';
import TextureIcon from '@mui/icons-material/Texture';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Gesture from '@mui/icons-material/Gesture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const Stitching = styled.img`
  font-weight: bold;
  height: 60%;
  width: 60%;
  cursor: pointer;
  margin: auto;
`

const Circle = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #476488;
  border-radius: 50%;
  margin:auto;
`

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
    height: 39vh ;
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
  height: 315px;
  width: 100%;
  color: black;
  margin: 0 0px;
  font-size:1em;
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
    { width: 800, itemsToShow: 3 },
];


const ProductionContainerStep = styled.div`
    height: 100% ;
    width: 100%;
    // display: flex ;
    // justify-content: space-between ;
`;

const ProductionContainerStepLogo = styled.div`
    height: 38% ;
    width: 100%;
    // display: flex ;
    // justify-content: space-between ;
`;

const ProductionContainerStepTitle = styled.div`
    height: 22% ;
    width: 100%;
    display: flex ;
    // justify-content: space-between ;
`;

const ProductionContainerStepDesc = styled.div`
    height: 40% ;
    width: 100%;
    align-items: center;
    text-align: center;
  
    // display: flex ;
    // justify-content: space-between ;
`;


const ProductionProcess = () => {
    return (
        <div>
            <ClientsContainers>
                <ClientsContainersTitle>
                    <h1 style={{ fontSize: 28, marginBottom:35 }}>Production Process</h1>
                </ClientsContainersTitle>
                <ClientsContainersCarousel>
                    <Carousel showArrows={true} breakPoints={breakPoints}>
                        {/* <Item><ProductionProcessOne/></Item> */}
                        <Item><ProductionProcessOne /></Item>
                        <Item><ProductionProcessTwo /></Item>

                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <BallotIcon
                                            style={{ fontSize: 60, color: "white", margin: "auto" }}
                                        />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 3. Production Order</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>After sample approval we will send an order form for approval. The order form will include all information regarding product.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>

                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <Stitching src="https://i.imgur.com/8k7znOC.png" />

                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 4. Material Sourcing</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>After order form is confirmed we will order relevant fabric.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>
                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <TextureIcon
                                            style={{ fontSize: 60, color: "white", margin: "auto" }}
                                        />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 5. Pattern Creation</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>We will  start making patterns to be cut according to the final approved sizes.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>
                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <ContentCutIcon
                                            style={{ fontSize: 60, color: "white", margin: "auto" }}
                                        />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 6. Fabric Cutting</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>After fabric is acquired and patterns are finalised we will cut the fabric according to each pattern.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>
                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <Gesture
                                            style={{ fontSize: 60, color: "white", margin: "auto" }}
                                        />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 7. Printing/Embroidery</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>The panels are then sent for printing or embroidery before getting to the stitching department.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>
                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <Stitching src="https://i.imgur.com/SExzpaU.png" />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 8. Stitching</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>Panels are connected together to finish garment construction.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>

                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <Stitching src="https://i.imgur.com/rCpqRBV.png" />

                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 9. Garment Finishing</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>Garments will now be pressed and all relevent tags will be added.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>


                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <Stitching src="https://i.imgur.com/4oQaAcr.png" />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 10. Quality Control</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>After an inhouse quality check an external party will come to check quality, sizing, packaging etc. for garments before starting packaging.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>


                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <Stitching src="https://i.imgur.com/z0ZRnkY.png" />


                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto", fontSize:21 }}> 11. Packing</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>Garments are then packaged and boxed ready to be shipped.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>


                        <Item>
                            <ProductionContainerStep>
                                <ProductionContainerStepLogo>
                                    <Circle>
                                        <LocalShippingIcon
                                            style={{ fontSize: 60, color: "white", margin: "auto" }}
                                        />
                                    </Circle>
                                </ProductionContainerStepLogo>
                                <ProductionContainerStepTitle>
                                    <h2 style={{ margin: "auto" , fontSize:21}}> 12. Freight</h2>
                                </ProductionContainerStepTitle>
                                <ProductionContainerStepDesc>
                                    <p style={{ marginLeft: 40, marginRight: 35, fontSize: 18 }}>We will then give different shipping options for you to decide. On the other hand, if you have your own frieght agent we will provide box dimensions and quatities.</p>
                                </ProductionContainerStepDesc>
                            </ProductionContainerStep>
                        </Item>

                    </Carousel>

                </ClientsContainersCarousel>
                {/* <ProductionProcessOne/> */}
            </ClientsContainers>
        </div>
    )
}

export default ProductionProcess

