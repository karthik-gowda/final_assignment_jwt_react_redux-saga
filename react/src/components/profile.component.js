import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
//--------------SAGA-------------
import Button from '../redux/containers/button';
import ResItem from '../redux/containers/restoitem';
import Loading from '../redux/containers/loading';

export default class Discovery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
      <div>
        <header className="jumbotron">
          <h3>
            <strong>Hi {currentUser.username.toUpperCase()} Welcome to FoodLook!</strong>
          </h3>
        </header>
        <p>
          <strong className="text-muted">Email:</strong>{" "}
          {currentUser.email}
        </p>
        <div>
            <Button />
            <Loading />
            <ResItem />
        </div>
    </div>: null}
      </div>
    );
  }
}
