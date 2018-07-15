import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      students: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      const students = await this.students();
      this.setState({ students });
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }
  
  students() {
    return API.get("grades", "/grades");
  }

  renderStudentsList(students) {
    return [{}].concat(students).map(
      (student, i) =>
        i !== 0
          ? <ListGroupItem
              key={student.studentId}
              href={`/grades/${student.studentId}`}
              onClick={this.handleNoteClick}
              header={student.firstname.trim().split("\n")[0]}
            >
              {"Created: " + new Date(student.createdAt).toLocaleString()}
            </ListGroupItem>
          : <ListGroupItem
              key="new"
              href="/grades/new"
              onClick={this.handleNoteClick}
            >
              <h4>
                <b>{"\uFF0B"}</b> Add a new student
              </h4>
            </ListGroupItem>
    );
  }
  
  handleNoteClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Grades</h1>
        <p>A simple grades recording app</p>
      </div>
    );
  }

  renderStudents() {
    return (
      <div className="grades">
        <PageHeader>Your Students</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderStudentsList(this.state.students)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderStudents() : this.renderLander()}
      </div>
    );
  }
}