import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [menu, setMenu] = useState(false);
  function list() {
    setDisplay(!display);
  }
  function list2() {
    setDisplay2(!display2);
  }
  const menuAppear = () => {
    setMenu(!menu);
  };
  let img1 = (
    <svg
      className="img"
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
    </svg>
  );
  let img2 = (
    <svg
      className="img2"
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
    </svg>
  );
  let close = (
    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
      <g fill="#151515" fill-rule="evenodd">
        <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
        <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
      </g>
    </svg>
  );
  return (
    <div className="header">
      <div className="flex">
        <div className="logo">snap</div>
        <ul>
          <li className="flex">
            <div onClick={list}>Features</div>
            {display ? img2 : img1}
          </li>
          <li className="flex">
            <div onClick={list2}>Company</div>
            {display2 ? img2 : img1}
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
      <div onClick={menuAppear} className="menu">
        <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="#151515" fill-rule="evenodd">
            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
          </g>
        </svg>
      </div>
      {display && (
        <div className="list1">
          <ul>
            <li>Todo List</li>
            <li>Calender</li>
            <li>Reminders</li>
            <li>Planning</li>
          </ul>
        </div>
      )}
      {display2 && (
        <div className="list2">
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </div>
      )}
      {menu && (
        <div className="list-mobile">
          <div
            onClick={menuAppear}
            style={{ display: "flex", justifyContent: "end" }}
          >
            {close}
          </div>
          <ul className="ul-mobile">
            <li className="flex-li-mobile">
              <div onClick={list}>Features</div>
              {display ? img2 : img1}
            </li>
            <li className="flex-li-mobile">
              <div onClick={list2}>Company</div>
              {display2 ? img2 : img1}
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="buttons active">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
