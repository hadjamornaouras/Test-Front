import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./MenuLeftComponent.scss";

export default class MenuLeftComponent extends PureComponent {
  state = {
    data: [
      {
        activeId: "1",
        label: "Home furnishings",
        path: ""
      },
      {
        activeId: "2",
        label: "Decorative objects",
        path: ""
      },
      {
        activeId: "3",
        label: "Carpets and Rugs",
        path: ""
      },
      {
        activeId: "4",
        label: "Artificial plants",
        path: ""
      }
    ],
    activeLink: "1"
  };

  componentDidMount() {}
  toggle = item => {
    this.setState({ activeLink: item });
  };

  render() {
    let { data, activeLink } = this.state;
    return (
      <div className="menu_left">
        <h1>Shop</h1>
        <div className="ligne_verticale"></div>
        <ul className="menu">
          {data &&
            data.map((item, key) => (
              <li key={key} onClick={() => this.toggle(item.activeId)}>
                <Link to={"/"}>
                  <span
                    className={activeLink === item.activeId ? "active" : null}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
