import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import img1 from "../../Image/Image/cox bazar.png";
import img2 from "../../Image/Image/Sajek.png";
import img3 from "../../Image/Image/sundorbon.png";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings1 = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
    };
    const settings2 = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
    };
    return (
      <>
        <div className="container">
          <div className="row slider-area">
            <div className="col-md-6 slider-text">
              <Slider
                {...settings1}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
              >
                <div>
                  <h1> COX'S BAZAR </h1>
                  <p>
                    {" "}
                    Cox’s Bazar is a town on the southeast coast of Bangladesh.
                    It’s known for its very long, sandy beachfront, stretching
                    from Sea Beach in the north to Kolatoli Beach in the south.{" "}
                  </p>
                </div>
                <div>
                  <h1> SAJEK </h1>
                  <p>
                    {" "}
                    Sajek is a union located in the north of Chittagong Hill
                    Tracts. It's under Baghaichori Upazila in Rangamati hill
                    district, it is situated 67 kilometres (42 mi) north-east
                    from Khagrachhari town.{" "}
                  </p>
                </div>
                <div>
                  <h1> SUNDARBAN </h1>
                  <p>
                    {" "}
                    Sundarbans is a mangrove area in the delta formed by the
                    confluence of the Ganges, Brahmaputra and Meghna Rivers in
                    the Bay of Bengal.{" "}
                  </p>
                </div>
              </Slider>
            </div>
            <div className="col-md-6 slider-image">
              <Slider
                {...settings2}
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <img src={img2} alt="" />
                </div>
                <div>
                  <img src={img3} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}
// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Carousel = (props) => {
//     const { title, description, img, } = props.item;
//     const handleBook = props.handleBook;

//     const settings1 = {
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         pauseOnHover: true
//     };

//     const settings2 = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         pauseOnHover: true
//     };
//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <Slider {...settings1}>
//                             <div>
//                                 <h1> {title} </h1>
//                                 <p> {description} </p>
//                             </div>
//                         </Slider>
//                     </div>
//                     <div className="col-md-6">
//                         <Slider {...settings2}
//                             swipeToSlide={true}
//                             focusOnSelect={true}
//                         >
//                             <div>
//                                 <img src={img} alt="" />
//                             </div>
//                         </Slider>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Carousel;
