import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../src/este.png";
import home from "../src/home.png";
import login from './components/login';
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import enregister from './components/enregister';

function App() {
  return (<Router>
    <div className="App">
      <div>
      <label><img src={home} width="100%wh" height="200px"></img></label></div>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
            
            
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link" >
                  ajouter etudiant
                </Link>
              </Nav>

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Liste étudiants
                </Link>
              </Nav>
              <Nav>
                <Link to={"/enregister"} className="nav-link">
                  Registre
                </Link>
              </Nav>
              <Nav>
              <Link to={"/login"} className="nav-link">
                  Login
              </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/student-list" component={StudentList} />
                <Route path="/enregister" component={enregister} />
                <Route path="/login" component={login}/>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;