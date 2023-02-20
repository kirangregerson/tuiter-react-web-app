import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who";

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
                ${listItems()}
           </ul>
    `);
}

const listItems = () => {
    let output = "";
    for(let i=0; i<who.length; i++) {
        output += WhoToFollowListItem(who[i]);
    }
    return output;
}

export default WhoToFollowList;