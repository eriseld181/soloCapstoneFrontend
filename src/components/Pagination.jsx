import React from "react";
import { Link } from "react-router-dom";
import mainStyle from "./Component.module.css";
function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalnotes / props.notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              style={{ border: "none" }}
              to="/profile"
              onClick={() => props.paginate(number)}
              className={`page-link ${mainStyle.gradient}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
