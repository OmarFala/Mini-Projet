import React from "react";
import home from "../home.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      err: ""
    };
  }

  submit = e => {
    e.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin") {
      window.location = "http://localhost:3000/active";
    } else {
      this.setState({ err: "invalid" });
      console.log(this.username);
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="Login">
        <div>
          <label>
            <img src={home} width="100%wh" height="200px"></img>
          </label>
        </div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <div position="center">
              <label style={{ position: "center", color: "white" }}>
                Log in
              </label>
            </div>
          </Navbar>
        </header>
        <form>
          <FormGroup controlId="username">
            <FormLabel>username</FormLabel>
            <FormControl
              required
              type="text"
              id="username"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              id="password"
              required
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </FormGroup>

          <Button className="btn" onClick={this.submit} type="submit">
            Login
          </Button>

          <FormGroup controlId="password">
            <FormLabel>{this.state.err}</FormLabel>
          </FormGroup>
        </form>
      </div>
    );
  }
}
