import React, { Component } from "react";
import "./Popup.scss";
import Modal from "react-responsive-modal";
import image from "./images/pop-up.jpg";

export default class Popup extends Component {
  state = {
    open: this.props.modal
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Modal open={open} onClose={this.onCloseModal} className="modal-dialog">
        <div className="pop-up modal-content">
          <div className="div-img">
            <img src={image} alt="" />
          </div>
          <div className="div-text">
            <div className="row">
              <h1> Need Help ?</h1>
              <span>
                start a live call with us now to have us attend to any of your
                enquiries.
              </span>
            </div>

            <div className="div-btn row">
              <button className="btn-chat">
                <h5>Start Live Chat</h5>
              </button>
              <button className="btn-back">
                <h5>Request for call back</h5>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
