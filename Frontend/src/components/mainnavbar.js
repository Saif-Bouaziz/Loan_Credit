import React, { useContext } from "react";
import "../pages/LandingPages/Agent/index.css";
import SearchPage from "./searchPage";
import { HandleDelete } from "../pages/LandingPages/Agent/index";
import logo from "./4158620_bank_banking_business_cash_debt_icon.png"

const MainNavbar = () => {
  const helper = useContext(HandleDelete);
  const { state, dispatch } = helper;
  return (
    <section className="navbar">
      <div className="logo-container">
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="search-bar">
        <div
          className="search-button ui icon"
          data-tooltip="Search"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-search" />
        </div>
        <div className="text-input">
          <input
            type="text"
            placeholder="Search Demand"
            value={state.searchItem}
            onChange={(e) =>
              dispatch({
                type: "setSearchItem",
                payload: { searchItem: e.target.value },
              })
            }
          />
        </div>
        {state.searchItem.length > 0 ? <SearchPage /> : ""}

      </div>

      <div className="user-profiles">

        <div
          className="ui icon"
          data-tooltip="Setting"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-cog"></i>
        </div>

        <div
          className="ui icon user-image"
          data-tooltip="User"
          data-position="bottom left"
          data-inverted=""
        >
          <img
            src="https://lh3.googleusercontent.com/-sRMrl6qNKfg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmvyL2bfMIPYQU2eUrSMPQ0hJ18_g/photo.jpg?sz=46"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
