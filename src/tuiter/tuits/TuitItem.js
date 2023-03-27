import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
        post = {
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
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="fw-bold col-2">{post.userName} </div>
                        <div className="col-4">{post.handle} &#x2022; {post.time}</div>
                        <i className="bi bi-x-lg float-end col-6"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                    <div>{post.tuit}</div>
                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;