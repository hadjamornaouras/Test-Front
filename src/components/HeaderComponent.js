/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import "./HeaderComponent.scss";
import Menu from "../icons/menu.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HeaderComponent extends PureComponent {
  static propTypes = {
    /** The Header menu type */
    type: PropTypes.string,
    /** The label of this section */
    label: PropTypes.string,
    /** serach function */
    onSearch: PropTypes.func,
    /**sort function */
    handleSort: PropTypes.func
  };

  constructor() {
    super();

    this.handleSearch = this.handleSearch.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      search: false,
      search_value: "",
      sort_value: ""
    };
  }
  handleSort = e => {
    this.props.handleSort(e.target.value);
    this.setState({
      sort_value: e.target.value
    });
  };
  handleSearch = () => {
    if (!this.state.serach) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState({ serach: !this.state.serach });
  };
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleSearch();
  }
  handleInputChange = e => {
    this.setState(
      {
        search_value: e.target.value
      },
      () => this.props.onSearch(this.state.search_value)
    );
  };
  render() {
    const { label, type } = this.props;
    switch (type) {
      case "pagination":
        return (
          <nav className="navbar">
            <div className="container">
              <ul className="nav1">
                <li>
                  <a href="/">
                    <h1>{label}</h1>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Shop</span>
                  </a>
                </li>
              </ul>
              <div />
              <ul className="nav2">
                <li>
                  <a href="/">Previous</a>
                </li>
                <li>|</li>
                <li>
                  <a href="/">Next</a>
                </li>
              </ul>
            </div>
          </nav>
        );

      case "sort":
        return (
          <nav className="navbar">
            <div className="container">
              <ul className="nav1 sort">
                <Link to={"/"}>
                  <li>Home</li>
                  <li>-</li>
                  <li>H2</li>
                </Link>
              </ul>
              <div />
              <ul className="nav2 sort">
                <li>
                  <a href="/">Sort by :</a>
                </li>
                <li>
                  <button
                    className={
                      this.state.sort_value === "price"
                        ? "active-btn-sort"
                        : "btn-sort"
                    }
                    onClick={e => this.handleSort(e)}
                    value="price"
                  >
                    Price
                  </button>
                </li>
                <li>|</li>

                <li>
                  <button
                    className={
                      this.state.sort_value === "rating"
                        ? "active-btn-sort"
                        : "btn-sort"
                    }
                    onClick={e => this.handleSort(e)}
                    value="rating"
                  >
                    Rating
                  </button>
                </li>
                <li>|</li>
                <li>
                  <button
                    className={
                      this.state.sort_value === "brand"
                        ? "active-btn-sort"
                        : "btn-sort"
                    }
                    onClick={e => this.handleSort(e)}
                    value="brand"
                  >
                    Brand
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        );

      case "menu":
        return (
          <nav
            className="navbar"
            ref={node => {
              this.node = node;
            }}
          >
            <div className="container">
              <ul className="nav1">
                <li>
                  <button>
                    <img className="menu" src={Menu} alt="Menu" />
                  </button>
                </li>
              </ul>
              <div></div>
              <ul className="nav2">
                {this.state.serach && (
                  <li className="search-input">
                    <input
                      type="text"
                      value={this.state.search_value}
                      onChange={e => this.handleInputChange(e)}
                    />
                  </li>
                )}
                <li onClick={e => this.handleSearch()}>
                  <button className="btn-search">
                    <i className="fa fa-search"></i>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        );

      default:
        return (
          <nav className="navbar">
            <div className="container">
              <ul className="nav1">
                <li className="nav-item ">
                  <button>
                    <img className="menu" src={Menu} alt="Menu" />
                  </button>
                </li>
                <li>
                  <button className="btn-search">
                    <i className="fa fa-search"></i>
                  </button>
                </li>
              </ul>
              <h1 className="logo">minim</h1>
              <ul className="nav2">
                <li className="account">
                  <a href="/">
                    <h3>Account</h3>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-bell"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
  }
}

export default HeaderComponent;
