import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faBookmark,
    faEllipsisH,
    faEnvelope,
    faHashtag,
    faHome,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <FontAwesomeIcon icon={faHome} />
                &nbsp;
                Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <FontAwesomeIcon icon={faHashtag} />
                &nbsp;
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <FontAwesomeIcon icon={faBell} />
                &nbsp;
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <FontAwesomeIcon icon={faBookmark} />
                &nbsp;
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <FontAwesomeIcon icon={faList} />
                &nbsp;
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <FontAwesomeIcon icon={faUser} />
                &nbsp;
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <FontAwesomeIcon icon={faEllipsisH} />
                &nbsp;
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;