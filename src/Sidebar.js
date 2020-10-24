import React from 'react'
import "./sidebar.css"
import SidebarRow from "./SidebarRow"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title = "Home"/>
            <SidebarRow  Icon={WhatshotIcon} title = "Trending"/>
            <SidebarRow  Icon={SubscriptionsIcon} title = "Subscription"/>
            <hr></hr>
            <SidebarRow Icon = {VideoLibraryIcon} title = "Library"/>
            <SidebarRow Icon = {HistoryIcon} title = "History" />
            <SidebarRow Icon = {OndemandVideoOutlinedIcon} title = "Your Vidoes" />
            <SidebarRow Icon = {WatchLaterOutlinedIcon} title = "Watch Later" />
            <SidebarRow Icon = {ThumbUpAltOutlinedIcon} title = "Liked Videos" />
            <SidebarRow Icon = {ExpandMoreOutlinedIcon} title = "Show More"/>
            <hr/>
        </div>
    )
}
