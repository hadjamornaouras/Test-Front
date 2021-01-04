import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./HeaderComponent.scss";
import "./Filter.scss";
import { Dropdown } from "react-bootstrap";

class Filter extends PureComponent {
  static propTypes = {
    /** filter function */
    handleFilter: PropTypes.func
  };
  state = {
    option: [
      { id: 1, title: "Kitchen" },
      { id: 2, title: "Decor" },
      { id: 3, title: "Furniture" },
      { id: 4, title: "Accessoires" }
    ],
    list_options: []
  };
  handleFilter = filter => {
    this.state.list_options.push(filter);
    let data = [...new Set(this.state.list_options)];
    this.setState({ list_options: data }, () =>
      this.props.handleFilter(this.state.list_options)
    );
  };
  removeFilter = filter => {
    let data = this.state.list_options.filter(data => data !== filter);
    this.setState({ list_options: data }, () =>
      this.props.handleFilter(this.state.list_options)
    );
  };
  render() {
    let { option, list_options } = this.state;
    return (
      <div className="container">
        <div className="filter">
          <div className="left">
            <h1>Home Decor</h1>
            {list_options.length
              ? list_options.map((filter, key) => (
                  <span key={key}>
                    <i
                      onClick={() => this.removeFilter(filter)}
                      className="fa fa-close close"
                    ></i>
                    <h5>{filter}</h5>
                  </span>
                ))
              : null}
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Filter By</Dropdown.Toggle>

            <Dropdown.Menu>
              {option &&
                option.map((item, key) => (
                  <Dropdown.Item
                    key={key}
                    onClick={() => this.handleFilter(item.title)}
                  >
                    {item.title}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Filter;
