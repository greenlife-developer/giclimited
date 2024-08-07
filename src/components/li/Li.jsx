import React from "react";
import "./li.css";
import arrowdown from "../../assets/arrowdown.svg";
import { Link, NavLink, useLocation, matchPath } from "react-router-dom";

const Li = ({ li, items, to, isOpen, onClick, closeNav }) => {
  const location = useLocation();

  const newLocation = location.pathname.split("/")[1].toLocaleLowerCase();

  const isActive = to
    ? matchPath({ path: to, exact: true }, location.pathname)
    : items &&
      items.some((item) =>
        matchPath({ path: item.to, exact: true }, location.pathname)
      );

  const handleLinkClick = () => {
    if (items) {
      onClick(); // Toggle the dropdown if there are sub-items
    } else {
      closeNav(); // Close the navigation for direct links
    }
  };

  return (
    <li className={`item ${isOpen ? "open" : ""}`}>
      <div className="item_x" onClick={items ? onClick : null}>
        {to ? (
          <NavLink
            to={to}
            className={isActive ? "active" : ""}
            // onClick={closeNav}
          >
            {li}
          </NavLink>
        ) : (
          <div
            className={`non-navlink ${isActive ? "active" : ""}`}
            onClick={onClick}
          >
            <Link
              className={
                li.toLocaleLowerCase() === newLocation ||
                (newLocation === "about" && li === "About Us")
                  ? "active"
                  : null
              }
              // onClick={closeNav}
            >
              {li}
            </Link>
          </div>
        )}
        {items && <img src={arrowdown} alt="" onClick={onClick} />}
      </div>
      {items && (
        <div className={`all_items ${isOpen ? "open" : ""}`}>
          <div className={items.length > 5 ? "items items2" : "items"}>
            {items.map((item, i) => (
              <span key={i}>
                <Link onClick={closeNav} to={item.to}>
                  {item.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default Li;
