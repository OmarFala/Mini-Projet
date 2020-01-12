import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import EditStudent from "./edit-student.component";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
      )
      .then(res => {
        console.log("Student successfully deleted!");
      })
      .catch(error => {
        console.log(error);
      });
    window.location = "http://localhost:3000/active";
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Router>
            <Link
              className="edit-link"
              to={"/active/edit-student/" + this.props.obj._id}
            >
              Modifier
            </Link>

            <Button onClick={this.deleteStudent} size="sm" variant="danger">
              suprimer
            </Button>
            <Route path="/active/edit-student/:id" component={EditStudent} />
          </Router>
        </td>
      </tr>
    );
  }
}
