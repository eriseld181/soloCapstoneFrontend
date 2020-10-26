import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import mainStyle from "../Component.module.css";
import EditModal from "../modals/EditModalHomework";
export default function DropMenu() {
  return (
    <>
      <Dropdown className={` ${mainStyle.dropdownToggle} `}>
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
            Edit
          </Dropdown.Item>
          <Dropdown.Item
            className="text-right mb-1"
            style={{
              backgroundColor: "#0f1f26",
            }}
          >
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
