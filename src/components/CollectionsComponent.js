import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import "./CollectionsComponent.scss";
import collection1 from "./images/c1.jpg";
import collection2 from "./images/c2.jpg";
import collection3 from "./images/c3.jpg";
import collection4 from "./images/c4.png";

export default class CollectionsComponent extends Component {
  render() {
    const collections = [
      {
        image: collection1,
        label: "collection 1",
        id: "1"
      },
      {
        image: collection2,
        label: "collections 2",
        id: "2"
      },
      {
        image: collection4,
        label: "collections 3",
        id: "3"
      },
      {
        image: collection3,
        label: "collections 4",
        id: "4"
      }
    ];
    return (
      <>
        <HeaderComponent type="pagination" label="Collections" />
        <div className="collection">
          <div className="container">
            {collections &&
              collections.map((data, key) =>
                key === 0 ? (
                  <div className="row" key={key}>
                    <div className="col-sm-12 col-md-4">
                      <p>
                        Bacon ipsum dolori amet meat <br />
                        tri-tip andouille,picaha bacan <br /> salami burgdoggen
                        turducken <br /> chuk pig t-bone
                      </p>
                      <h3>
                        <button className="btn-collection">
                          <h4>See all collection </h4>
                        </button>
                      </h3>
                    </div>
                    <div className="col-sm-12 col-md-4 card1">
                      {data.id % 2 !== 0 ? <Collection item={data} /> : null}
                    </div>
                    <div className="col-sm-12 col-md-4 card-title">
                      <span>COLLECTION</span>
                      <h3>{data.label}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="row" key={key}>
                    <div className="col-sm-12 col-md-6">
                      {data.id % 2 === 0 && (
                        <div className="row">
                          <div className="col-sm-12 col-md-8">
                            <Collection item={data} />
                          </div>
                          <div className="col-sm-12 col-md-4 card-title">
                            <span>COLLECTION</span>
                            <h3>{data.label}</h3>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-6">
                      {data.id % 2 !== 0 && (
                        <div className="row">
                          <div className="col-sm-12 col-md-8">
                            <Collection item={data} />
                          </div>
                          <div className="col-sm-12 col-md-4 card-title">
                            <span>COLLECTION</span>
                            <h3>{data.label}</h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </>
    );
  }
}

const Collection = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.label} />
    </div>
  );
};
