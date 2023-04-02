import React from "react";
import "./TuitStats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faRetweet,
    faComment
} from "@fortawesome/free-solid-svg-icons";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "liked":  false,
            "replies": 2049,
            "retuits": 1826,
            "likes": 55281,
            "dislikes": 5300
        }
    }
) => {
    const dispatch = useDispatch();
    return(
        <div className="row">
            <div className="col-3">
                <FontAwesomeIcon icon={faComment} />
                &#x2003;
                {tuit.replies}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faRetweet} />
                &#x2003;
                {tuit.retuits}
            </div>
            <div className="col-3">
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
            <div className="col-3">
                Dislikes: {tuit.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down me-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;