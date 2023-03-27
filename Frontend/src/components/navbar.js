import React, { useContext } from "react";
import PrintList from "./printList";
import SideNavbar from "./sideNavbar";
import { HandleDelete } from "../pages/LandingPages/Agent/index";


const Nabar = () => {
  const helper = useContext(HandleDelete);
  const { dispatch, state } = helper;
  return (
    <React.Fragment>
      <div className="final-design">
        <SideNavbar dispatch={dispatch} state={state} />
        <div style={{ height: "100vh", overflowY: "scroll" }}>
          <PrintList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nabar;

