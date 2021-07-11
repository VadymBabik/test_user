import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="indigo">
          <div className="nav-wrapper container">
            <NavLink to="/" className="brand-logo left">
              PrUser
            </NavLink>
            <ul id="nav-mobile" className="right ">
              <li>
                <NavLink to="/create_new_user" activeClassName={s.selected}>
                  Create new user
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
