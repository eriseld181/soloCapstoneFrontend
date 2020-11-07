import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
export default class Students extends Component {
  state = {
    allUsers: [],
  };

  allUsersFetch = async () => {
    const response = await fetch("http://localhost:5000/api/users/", {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    this.setState({ allUsers: fetchedUsers });
  };

  componentDidMount = async () => {
    // console.log("this is cookie.get", Cookies.get("accessToken"));

    this.allUsersFetch();
    // console.log(this.state.user);
  };
  render() {
    return (
      <Container>
        <Table
          className="mt-4"
          style={{
            backgroundColor: "#03B8EA",
            color: "black",
          }}
          striped
          bordered
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>GitHub Link</th>
              <th>LinkedIn</th>
              <th>Portfolio</th>
              <th>Contact</th>
            </tr>
          </thead>
          {this.state.allUsers.users &&
            this.state.allUsers.users.map((user, index) => {
              return (
                <>
                  <tbody key={user._id}>
                    {user.role && user.role === "student" && (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          {user.firstname} {user.lastname}
                        </td>
                        <td>{user.role}</td>
                        <td>{user.github}</td>
                        <td>{user.linkedin}</td>
                        <td>{user.portfolio}</td>
                        <td className="d-flex justify-content-between">
                          {user.email} <MdEmail className="mt-1" />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </>
              );
            })}
        </Table>
      </Container>
    );
  }
}
