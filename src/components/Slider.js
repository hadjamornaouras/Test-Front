import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./slides/slide1.png";
import image2 from "./slides/slide2.png";
import image3 from "./slides/slide3.png";
import image4 from "./slides/slide4.png";
import image5 from "./slides/slide5.png";

class SliderComponent extends Component {
  state = {
    images: []
  };
  componentDidMount() {
    const images = [
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
      { id: 4, src: image4 },
      { id: 5, src: image5 }
    ];
    this.setState({ images });
  }
  render() {
    const { images } = this.state;
    return (
      <div style={{ width: "466px" }}>
        <Slider
          dots={true}
          speed={1000}
          infinite={true}
          autoplaySpeed={5000}
          autoplay
        >
          {images &&
            images.map((img, key) => (
              <div key={key} style={{ width: "100%" }}>
                <img src={img.src} alt="" />
              </div>
            ))}
          {/* <div style={{ width: "100%" }}>
            <img src={image1} alt="" />
          </div>
          <div style={{ width: "100%" }}>
            <img src={image2} alt="" />
          </div>
          <div style={{ width: "100%" }}>
            <img src={image3} alt="" />
          </div>
          <div style={{ width: "100%" }}>
            <img src={image4} alt="" />
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default SliderComponent;
