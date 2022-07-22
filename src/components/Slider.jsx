import React, {useState} from 'react'
import "./Slider.scss"
import AboutUs from './AboutUs';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BCI from './BCI'

const Slider = () => {
    let sliderArray = [ <BCI/>,2, 3, 4, 5];
    const [x,setX] = useState(0);
    const goLeft=()=>{
        setX(x+100);
        x === 0?setX(-100*(sliderArray.length-1)):setX(x+100);

    };
    const goRight=()=>{
        setX(x-100);
        x === -100*(sliderArray.length-1)?setX(0):setX(x-100);
    };
    return (
        <div className='slider'>
            {
                sliderArray.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                            {
                                item
                            }
                        </div>

                    )
                })
            }
        <button id="goLeft"  onClick={goLeft}><ArrowBackIosNewIcon style={{color:"white", fontSize:45}}/></button>
        <button id="goRight" onClick={goRight}><ArrowForwardIosIcon style={{color:"white", fontSize:45}}/></button>
        </div>
    )
}

export default Slider
