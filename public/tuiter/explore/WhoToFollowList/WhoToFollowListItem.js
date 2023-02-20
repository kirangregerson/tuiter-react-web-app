

function WhoToFollowListItem(who) {
    return(`
                <li class="row suggestion align-items-start">
                    <div class="col-3">
                        <img src=${who.avatarIcon} class="suggestion-img">
                    </div>
                    <div class="suggestion-text col">
                        <div class="suggestion-header">
                            ${who.userName}
                            <i class="fa fa-check-circle"></i>
                        </div>
                        <div class="suggestion-handle">
                            ${who.handle}
                        </div>
                    </div>
                    <div class="follow-btn col">
                        <button class="btn btn-primary rounded-pill">
                            Follow
                        </button>
                    </div>
                </li>
    `);
}

