// components/Navbar/index.js

import React from "react";
import {Bars, Nav, NavLink, NavMenu,} from "./HeaderElements";

/**
 * Top level menu.
 *
 * @returns {Element}
 * @constructor
 */
export const Header = () => {
  return (
    <>
      <Nav>
        <Bars/>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/list" activeStyle>
            List
          </NavLink>
          <NavLink to="/groups" activeStyle>
            Groups
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

