import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, ButtontoolBar } from "react-bootstrap";

class FormAddMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FormAddMovie">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a new movie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 align="center">Add a new Movie </h1>
            <form className="form-row align-items-center">
              <input
                value={this.props.state.name}
                name="description"
                type="text"
                placeholder="Name Movie"
                onChange={(e) => {
                  this.props.addfilmName(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                value={this.props.state.description}
                type="text"
                name="name"
                placeholder="Description of the movie"
                onChange={(e) => {
                  this.props.addfilmDescription(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                value={this.props.state.rating}
                name="description"
                type="text"
                placeholder="Rate of the movie "
                onChange={(e) => {
                  this.props.addfilmRate(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                type="text"
                src={this.props.state.image}
                alt="movie poster "
                placeholder="POster of the movie "
                onChange={(e) => {
                  this.props.addfilmImage(e.target.value);
                }}
                className="form-control mb-2"
              />
              <input
                type="button"
                value="Add Movie"
                onClick={this.props.addObjectMovie}
                className="btn btn-primary"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default FormAddMovie;
