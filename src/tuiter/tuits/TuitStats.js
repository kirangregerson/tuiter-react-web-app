import React from "react";
import "./TuitStats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faRetweet,
    faComment
} from "@fortawesome/free-solid-svg-icons";
const TuitStats = (
    {
        post = {
            "liked":  false,
            "replies": 2049,
            "retuits": 1826,
            "likes": 55281,
        }
    }
) => {
    return(
        <div className="row">
            <div className="col-4">
                <FontAwesomeIcon icon={faComment} />
                &#x2003;
                {post.replies}
            </div>
            <div className="col-4">
                <FontAwesomeIcon icon={faRetweet} />
                &#x2003;
                {post.retuits}
            </div>
            <div className="col-4" style={{color: post.liked === true ? "#e2326f" : "#000000"}}>
                <FontAwesomeIcon icon={faHeart} />
                &#x2003;
                {post.likes}
            </div>
        </div>
    );
};
export default TuitStats;