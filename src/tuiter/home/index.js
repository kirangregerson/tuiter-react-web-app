import React from "react";
import "./index.css";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <h2>
                Home
            </h2>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;