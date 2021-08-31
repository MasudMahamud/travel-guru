import React from 'react';
import './Header.css';
import BackgroundImage from '../../Image/Image/BackgroundImage.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../Carousel/Carousel';



const Header = () => {

    return (
        <>
            <div className="container">
                <div className="container">
                    <div style={{
                        backgroundImage: ` 
                     linear-gradient( 
                     rgb(22 18 6 / 10%),
                     rgb(10 14 7 / 30%)),
                     url(${BackgroundImage})`
                    }} className='header-bg' >

                        <Carousel></Carousel>

                    </div>
                </div>
            </div>


        </>
    );
};

export default Header;