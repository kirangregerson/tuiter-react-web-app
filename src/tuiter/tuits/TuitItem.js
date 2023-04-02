import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "handle": "@spacexxx",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla.jpg",
            "tuit": "The build quality was up to Tesla standards, so now there are two defunct machines just sitting on the red planet"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="fw-bold col-2">{tuit.userName} </div>
                        <div className="col-4">{tuit.handle} &#x2022; {tuit.time}</div>
                        <i className="bi bi-x-lg float-end col-6"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;