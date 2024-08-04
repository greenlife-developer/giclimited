import React from "react";
import "./li.css";
import arrowdown from "../../assets/arrowdown.svg";
import { Link, NavLink, useLocation, matchPath } from "react-router-dom";

const Li = ({ li, items, to, isOpen, onClick }) => {
  const location = useLocation();

  const isActive = to
    ? matchPath({ path: to, exact: true }, location.pathname)
    : items &&
      items.some((item) =>
        matchPath({ path: item.to, exact: true }, location.pathname)
      );

  return (
    <li className={`item ${isOpen ? "open" : ""}`}>
      <div className="item_x" onClick={items ? onClick : null}>
        {to ? (
          <NavLink
            to={to}
            className={isActive ? "active" : ""}
            onClick={items ? onClick : null}
          >
            {li}
          </NavLink>
        ) : (
          <div
            className={`non-navlink ${isActive ? "active" : ""}`}
            onClick={onClick}
          >
            <a>{li}</a>
          </div>
        )}
        {/* <NavLink to={to ? to : null} onClick={items ? onClick : null}>
          {li}
        </NavLink> */}
        {items && <img src={arrowdown} alt="" onClick={onClick} />}
      </div>
      {items && (
        <div className={`all_items ${isOpen ? "open" : ""}`}>
          <div className={items.length > 5 ? "items items2" : "items"}>
            {items.map((item, i) => (
              <span key={i}>
                <Link to={item.to}>{item.name}</Link>
              </span>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default Li;
