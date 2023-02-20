const NavigationSidebar = () => {
    return(`
<div id="left-navbar" class="col-3">
            <div>
                <div class="row" class="tab">
                    <i class="fab fa-twitter"></i>
                </div>
                <div class="row" href="home.html">
                <span>
                    <i class="fa fa-home"></i>
                    Home
                </span>
                </div>
                <div class="row bg-primary text-white" href="explore.html">
                <span>
                    <i class="fa fa-hashtag"></i>
                    Explore
                </span>
                </div>
                <div class="row" href="notifications.html">
                <span>
                    <i class="fa fa-bell"></i>
                    Notifications
                </span>
                </div>
                <div class="row" href="messages.html">
                <span>
                    <i class="fa fa-envelope"></i>
                    Messages
                </span>
                </div>
                <div class="row" href="bookmarks.html">
                <span>
                    <i class="fa fa-bookmark"></i>
                    Bookmarks
                </span>
                </div>
                <div class="row" href="lists.html">
                <span>
                    <i class="fa fa-list"></i>
                    Lists
                </span>
                </div>
                <div class="row" href="profile.html">
                <span>
                    <i class="fa fa-user"></i>
                    Profile
                </span>
                </div>
                <div class="row" href="more.html">
                <span>
                    <i class="fa fa-ellipsis-h"></i>
                    More
                </span>
                </div>
            </div>
            <!--Tuit Button-->
            <div id="tuit-button" class="row">
                <button class="btn btn-primary rounded-pill">
                    Tuit
                </button>
            </div>
        </div>
 `);
}
export default NavigationSidebar;