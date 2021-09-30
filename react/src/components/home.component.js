import React, { Component } from "react";
import foodimage from "./foodimage.jpg";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to FoodLook</h3>
        </header>
        <div className="container center">
          <img className="img-responsive rounded my-4" src={foodimage} alt="food image" width="100%" height="700"/>
        </div>
      </div>
    );
  }
}
