import React, { Component } from "react";
import "./ProductsComponent.scss";
//import exemple from "./images/exemple.svg";

export default class PopularComponent extends Component {
  render() {
    let { products } = this.props;
    let baseImgURL = `https://raw.githubusercontent.com/hadjamornaouras/json-server/master/img/`;
    return (
      <>
        <div className="products">
          <div className="container">
            {products ? (
              products.map((item, key) => (
                <div className="card" key={key}>
                  <img src={baseImgURL + item.img} alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price} $</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="loader"></div>
            )}
          </div>
        </div>
      </>
    );
  }
}
