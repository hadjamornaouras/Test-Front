import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import "./PopularComponent.scss";
import pop1 from "./images/pop1.jpg";
import pop2 from "./images/pop2.jpg";
import pop3 from "./images/pop3.jpg";
import pop4 from "./images/pop4.jpg";
import pop5 from "./images/pop5.jpg";
import pop6 from "./images/pop6.jpg";

export default class PopularComponent extends Component {
  render() {
    const popular = [
      {
        image: pop1,
        label: "popular 1",
        price: "22.5"
      },
      {
        image: pop2,
        label: "popular 2",
        price: "35"
      },
      {
        image: pop3,
        label: "popular 3",
        price: "100"
      },
      {
        image: pop4,
        label: "popular 4",
        price: "17"
      },
      {
        image: pop5,
        label: "popular 5",
        price: "55.5"
      },
      {
        image: pop6,
        label: "popular 6",
        price: "99.99"
      }
    ];

    return (
      <>
        <HeaderComponent type="pagination" label="Popular" />
        <div className="popular">
          <div className="container">
            {popular &&
              popular.map((item, key) => (
                <div className="card" key={key}>
                  <img src={item.image} alt={item.label} />
                  <div className="card-body">
                    <h5 className="card-title">{item.label}</h5>
                    <p className="card-text">{item.price} $</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}
