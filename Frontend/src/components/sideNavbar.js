import React, { useState, useEffect, useContext } from "react";
import "../pages/LandingPages/Agent/sidebar.css";
import { HandleDelete } from "../pages/LandingPages/Agent/index";

const SideNavbar = ({ setcurrentActive }) => {
  const [show, setShow] = useState(false);
  const [innerText, setInnerText] = useState("More");
  const [classt, setClasst] = useState("fas fa-chevron-down");
  const helper = useContext(HandleDelete);

  const { dispatch, state } = helper;

  useEffect(() => {
    show ? setInnerText("Less") : setInnerText("More");
    show ? setClasst("fas fa-chevron-up") : setClasst("fas fa-chevron-down");
  }, [show]);

  return (
    <div className="side-navbar">


      <div className="btn-group">
        <ul className="side-bar-btn-group1">
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "primary" },
                })
              }
            >
              <i className="far fa-window-maximize"></i>
              <span>Non lus</span>
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "social" },
                })
              }
            >
              <i className="fas fa-star" style={{ paddingLeft: 0 }}></i>
              <span>Acceptés</span>
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "promotions" },
                })
              }
            >
              <i className="fas fa-clock"></i>
              <span>Refusés</span>
            </div>
          </li>



        </ul>


      </div>
    </div>
  );
};

export default SideNavbar;
