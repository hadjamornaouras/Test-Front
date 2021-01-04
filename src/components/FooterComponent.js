import React, { Component } from "react";
import "./FooterComponent.scss";

export default class FooterComponent extends Component {
  render() {
    return (
      <section className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-2"></div>
            <div className="col-xs-12 col-md-4">
              <h1>Newsletter</h1>
              <p className="text-justify">
                Register now with our newsletter and get the latest <br />
                updates availabe
              </p>
            </div>
            <div className="col-xs-12 col-md-5 form">
              <span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                />
              </span>
              <span className="email">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                />
                <button className="btn">Send</button>
              </span>
            </div>
          </div>
          <div className="col-xs-12 col-md-1 form" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 copy-text">
              <p className="copyright-text">
                &copy; Copyright Minim website 2016
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons social-circle">
                <li>
                  <a className="facebook" href="#facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
