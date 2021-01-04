import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import MenuLeftComponent from "../components/MenuLeftComponent";
import SliderComponent from "../components/Slider";
import PopularComponent from "../components/PopularComponent";
import CollectionsComponent from "../components/CollectionsComponent";
import FooterComponent from "../components/FooterComponent";
import Popup from "../components/Popup";
import "./HomePage.scss";

class Home extends PureComponent {
  state = {
    popular_product: []
  };

  render() {
    return (
      <>
        {/* The header */}
        <section className="section-header">
          <HeaderComponent />
        </section>
        <Popup modal={true} />
        {/* The First section in home page */}
        <section className="section-one">
          <div className="row">
            <div className="container">
              <MenuLeftComponent />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <SliderComponent />
              </div>
              <div>
                <span>
                  <h3>Limited edition</h3>
                </span>
                <span>
                  <h1>White Clock</h1>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4 button">
              <button className="btn">
                <Link to={"/product_list"}>Shop Now</Link>
              </button>
            </div>
          </div>
        </section>
        {/* The second section in home page */}
        <section className="section-two">
          <div className="container">
            <div className="shop-out-door">
              <span className="item-a">
                <h3>OutDoors</h3>
                <span className="shop">SHOP</span>
              </span>
              <span className="item-b">
                <button className="btn-item">
                  <h4>Shop Indoors</h4>
                </button>
              </span>
            </div>
            <div className="shop-in-door">
              <span className="item-a">
                <h3>InDoors</h3>
                <span className="shop">SHOP</span>
              </span>
              <span className="item-b">
                <button className="btn-item">
                  <h4>Shop Outdoors</h4>
                </button>
              </span>
            </div>
          </div>
        </section>
        {/* The Third section in home page */}
        <section className="section-third">
          <PopularComponent />
        </section>
        {/* The Fourth section in home page */}
        <section className="section-fourth">
          <CollectionsComponent />
        </section>
        {/* The Fifth section in home page */}
        <section className="section-Fifth">
          <FooterComponent />
        </section>
      </>
    );
  }
}

export default Home;
