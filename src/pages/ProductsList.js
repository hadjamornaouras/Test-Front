import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Products from "../components/Products";
import PaginationComponent from "../components/PaginationComponent";
import Filter from "../components/Filter";
import isEqual from "lodash/isEqual";
import "./ProductsList.scss";

class ProductsList extends Component {
  state = {
    products: [],
    default_products: [],
    serachText: "",
    currentPage: 1,
    numberPerPage: 12
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch(
      `https://my-json-server.typicode.com/hadjamornaouras/json-server/products`
    )
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {
        this.setState({
          products: data,
          default_products: data,
          isLoading: false
        });
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchUsers();
    this.loadProducts();
  }
  componentDidUpdate(preProps, prevState) {
    if (!isEqual(prevState.default_products, this.state.default_products)) {
      this.loadProducts();
    }
    if (!isEqual(prevState.currentPage, this.state.currentPage)) {
      this.loadProducts();
    }
    if (
      !isEqual(prevState.currentPage, this.state.currentPage) &&
      !isEqual(prevState.products, this.state.products)
    ) {
      this.loadProducts(this.state.products);
    }
  }
  /**sort funtion */
  handleSort = e => {
    let { products } = this.state;
    let result = [];
    switch (e) {
      case "price":
        result = products.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case "rating":
        result = products.sort((a, b) => (a.rating > b.rating ? 1 : -1));
        break;
      case "brand":
        result = products.sort((a, b) => (a.brand > b.brand ? 1 : -1));
        break;
      default:
        result = products;
    }
    this.setState({ products: result });
  };
  /**handle search function */
  handleSearch = e => {
    this.setState({ serachText: e });
  };
  handleFilter = filters => {
    let data = [];
    if (filters.length) {
      data = filters.map(e =>
        this.state.default_products.filter(
          item => item.category === e.toLowerCase()
        )
      );
      let products = [].concat(...data);
      this.loadProducts(products);
    } else {
      this.loadProducts();
    }
  };
  /** handle pagination functions */
  handleCurrentPage = currentPage => {
    this.setState({ currentPage: currentPage });
  };
  loadProducts = (data = this.state.default_products) => {
    let begin = (this.state.currentPage - 1) * this.state.numberPerPage;
    let end = begin + this.state.numberPerPage;

    let pageList = data.slice(begin, end);
    this.setState({ products: pageList });
  };

  render() {
    let { products, default_products } = this.state;
    let searchString = this.state.serachText.trim().toLowerCase();
    if (searchString.length > 0) {
      products =
        default_products &&
        default_products.filter(i => i.title.toLowerCase().match(searchString));
    }

    return (
      <>
        <div className="container">
          <HeaderComponent type="menu" onSearch={e => this.handleSearch(e)} />
          <HeaderComponent type="sort" handleSort={e => this.handleSort(e)} />
          <Filter handleFilter={e => this.handleFilter(e)} />
          <Products products={products} />
          <PaginationComponent
            products={default_products.length}
            count={this.state.products.length}
            handleCurrentPage={e => this.handleCurrentPage(e)}
          />
        </div>
      </>
    );
  }
}

export default ProductsList;
