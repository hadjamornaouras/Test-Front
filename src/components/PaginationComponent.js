import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import "./PaginationComponent.scss";

class PaginationComponent extends PureComponent {
  static propTypes = {
    /** total list  length */
    products: PropTypes.number,
    count: PropTypes.number
  };
  state = {
    list: this.props.products,
    pageList: [],
    currentPage: 1,
    numberPerPage: 12,
    numberOfPages: 0
  };
  componentDidMount() {
    this.setState({
      numberOfPages: Math.ceil(this.props.products / this.state.numberPerPage)
    });
  }
  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.products, this.props.products)) {
      this.setState({
        numberOfPages: Math.ceil(this.props.products / this.state.numberPerPage)
      });
    }
  }
  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () =>
      this.props.handleCurrentPage(this.state.currentPage)
    );
  };

  previousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 }, () =>
      this.props.handleCurrentPage(this.state.currentPage)
    );
  };

  render() {
    return (
      <nav className="pagination">
        <div className="container">
          <ul>
            <li className="previous">
              <button
                disabled={this.state.currentPage === 1}
                onClick={() => this.previousPage()}
                className="btn-pagination"
              >
                Previous
              </button>
            </li>
          </ul>
          <span>
            {this.state.currentPage}/{this.state.numberOfPages}
          </span>
          <ul>
            <li className="next">
              <button
                disabled={
                  this.state.currentPage === this.state.numberOfPages ||
                  this.state.numberPerPage > this.props.count
                }
                onClick={() => this.nextPage()}
                className="btn-pagination"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default PaginationComponent;
