import React, { Component } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Container } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import mainStyle from "../Component.module.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
const url = process.env.REACT_APP_URL;
export default class Students extends Component {
  state = {
    allUsers: [],
  };

  allUsersFetch = async () => {
    const response = await fetch(`${url}/api/users/`, {
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
      <Container className={`text-center mt-4 mb-4 `}>
        <Table className={`  ${mainStyle.clearSpaces}  `}>
          <Thead
            className={` ${mainStyle.tableBorder}  ${mainStyle.clearSpaces} ${mainStyle.tableHeaderBgBlue} `}
          >
            <Tr
              className={` ${mainStyle.tableBorder}  ${mainStyle.clearSpaces} `}
            >
              <Th
                className={`${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                #
              </Th>
              <Th
                className={`  ${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                Full Name
              </Th>
              <Th
                className={` ${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                Role
              </Th>
              <Th
                className={`   ${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                GitHub Link
              </Th>
              <Th
                className={`    ${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                LinkedIn
              </Th>
              <Th
                className={`   ${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                Portfolio
              </Th>
              <Th
                className={`   ${mainStyle.tableBorder}  ${mainStyle.clearSpaces}`}
              >
                Contact
              </Th>
            </Tr>
          </Thead>
          {this.state.allUsers.users &&
            this.state.allUsers.users.map((user, index) => {
              return (
                <>
                  <Tbody key={user._id} className={``}>
                    {user.role && user.role === "student" && (
                      <Tr className={` ${mainStyle.tableBorder}  `}>
                        <Td className={` ${mainStyle.tableBorder} `}>
                          <p className={` ${mainStyle.postText} `}>
                            {index + 1}
                          </p>
                        </Td>
                        <Td className={` ${mainStyle.tableBorder} `}>
                          <p className={` ${mainStyle.postText} `}>
                            {user.firstname} {user.lastname}
                          </p>
                        </Td>
                        <Td className={` ${mainStyle.tableBorder} `}>
                          <p className={` ${mainStyle.postText} `}>
                            {user.role}
                          </p>
                        </Td>
                        <Td className={` ${mainStyle.tableBorder} `}>
                          <p className={` ${mainStyle.postText} `}>
                            {user.github}
                          </p>
                        </Td>
                        <Td className={` ${mainStyle.tableBorder} `}>
                          <p className={` ${mainStyle.postText} `}>
                            {" "}
                            <a
                              href={user.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              linkedin.com/in/{user.firstname}
                            </a>
                          </p>{" "}
                        </Td>
                        <Td className={` ${mainStyle.tableBorder} `}>
                          <p className={` ${mainStyle.postText} `}>
                            {" "}
                            <a
                              href={user.portfolio}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {user.portfolio}
                            </a>
                          </p>{" "}
                        </Td>
                        <Td>
                          <p
                            className={`  ${mainStyle.postText} ml-1  d-flex `}
                          >
                            {user.email}{" "}
                            <MdEmail
                              className={` ${mainStyle.socialIcons} ml-auto `}
                            />
                          </p>
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </>
              );
            })}
        </Table>
      </Container>
    );
  }
}
