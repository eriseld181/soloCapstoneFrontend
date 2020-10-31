import React, { useState, useEffect } from "react";
import { Card, Col, Row, Container, Dropdown, Button } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../../components/Component.module.css";
import Pagination from "../Pagination";
import AddNewNoteModal from "../modals/AddNewNoteModal";
import EditModalNotes from "../modals/EditModalNotes";
import { BsThreeDots } from "react-icons/bs";
function Notes() {
  const url = process.env.REACT_APP_URL;
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(4);
  // Get current notes
  const indexOfLastPost = currentPage * notesPerPage;
  const indexOfFirstPost = indexOfLastPost - notesPerPage;
  const currentnotes = notes.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const noteFetch = async () => {
    setLoading(true);
    const response = await fetch(`${url}/api/notes`, {
      method: "GET",
      credentials: "include",
    });
    const fetchedNotes = await response.json();

    setNotes(fetchedNotes);
    setLoading(false);
  };

  const noteDelete = async (id) => {
    const response = await fetch(url + "/api/notes/" + id, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      noteFetch();
    }
  };

  useEffect(() => {
    noteFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [""]);
  // Change page
  if (loading) {
    return (
      <Row
        style={{ margin: "0px" }}
        className="justify-content-center mb-3 mt-3"
      >
        Loading...
      </Row>
    );
  }
  return (
    <>
      {" "}
      <Container>
        {" "}
        <Row
          className="justify-content-center mb-1 mt-3 "
          style={{ margin: "0px", padding: "0px" }}
        >
          <Col
            xs={6}
            style={{
              margin: "0px",
              padding: "0px",
              // outline: "solid red 2px",
            }}
          >
            <AddNewNoteModal
              noteFetch={noteFetch}
              className={`${mainStyle.cardDesignClean}`}
            />
          </Col>
        </Row>
      </Container>
      <Row
        style={{ margin: "0px", padding: "0px" }}
        className=" text-left mt-5"
      >
        {currentnotes && currentnotes.length > 0 ? (
          currentnotes.map((note) => {
            return (
              <Col xs={6} key={`card-${note._id}`}>
                {" "}
                <Card
                  className=" mb-1 "
                  style={{
                    backgroundColor: "#0F1F26",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Row>
                      <Col sm={9} style={{ outline: "solid red 1px" }}>
                        {" "}
                        <Card.Title
                          // style={{ outline: "solid blue 2px" }}
                          className={`mt-2 ml-3 text-left ${mainStyle.titleBig} `}
                        >
                          <h3>{note.myTitle}</h3>
                        </Card.Title>
                      </Col>
                      <Col sm={3}>
                        {" "}
                        <Dropdown
                          className={` ${mainStyle.dropdownToggle} ml-auto mr-2 `}
                        >
                          <Dropdown.Toggle
                            style={{
                              border: "none",
                              boxShadow: "none",
                            }}
                            className={` ${mainStyle.dropdownToggle} ${mainStyle.bg}`}
                            variant="primary"
                            id="dropdown-basic"
                          >
                            <BsThreeDots style={{ fontSize: "35px" }} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            className={`${mainStyle.bg}`}
                            style={{
                              backgroundColor: "#0f1f26",
                            }}
                          >
                            <Dropdown.Item
                              style={{
                                backgroundColor: "#0f1f26",
                              }}
                              className="text-right mb-2"
                            >
                              <EditModalNotes
                                note={note}
                                noteFetch={noteFetch}
                              />
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-right mb-1"
                              style={{
                                backgroundColor: "#0f1f26",
                              }}
                            >
                              <Button
                                onClick={() => noteDelete(note._id)}
                                style={{ width: "100%" }}
                              >
                                Delete
                              </Button>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>

                    <Card.Title>
                      {/* Created By: {note.userId.username} */}
                    </Card.Title>
                    <Card.Text
                      className={` ${mainStyle.cutText} ${mainStyle.textJustify}  `}
                    >
                      {note.description}
                    </Card.Text>
                    {/* <Card.Img
                      className=" mx-auto"
                      variant="top"
                      style={{ width: "200px" }}
                      src={note.image}
                    /> */}
                  </Card.Body>
                </Card>{" "}
              </Col>
            );
          })
        ) : (
          <DefaultComponent
            img="./publication.png"
            title="There is nothing to see now!"
            text="All your notes will be shown here. Add a new note..."
          />
        )}
      </Row>{" "}
      <div className="container mt-2">
        <Pagination
          notesPerPage={notesPerPage}
          totalnotes={notes.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}
export default Notes;
