import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import home from "../src/home.png";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import StudentList from "./components/student-list.component";

function active() {
  return (
    <Router>
      <div className="App">
        <div>
          <label>
            <img src={home} width="100%wh" height="200px"></img>
          </label>
        </div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand></Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/active/create-student"} className="nav-link">
                    ajouter etudiant
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/active"} className="nav-link">
                    Liste étudiants
                  </Link>
                </Nav>
                <Nav>
                  <a href="http://localhost:3000/" className="nav-link">
                    LogOut
                  </a>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Route exact path="/active" component={StudentList} />
                <Route
                  path="/active/create-student"
                  component={CreateStudent}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default active;
