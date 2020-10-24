import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom"
export default function Header() {

    const [inputSearch, setinputSearch] = useState("");



    const image = "./image/youtube.png"
    return (
        <div className= "header">
            <div className="header__left">
                <MenuIcon />
                <Link to = {"/"}>
                <img className="header__logo" src={require(`${image}`)} alt=""/>
                </Link>
            </div>
            <div className="header__input">
                <input onChange = {e => setinputSearch(e.target.value)} placeholder="Search" type="text" value= {inputSearch}/>
                <Link to = {`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className= "header_icon"/>
                <AppsIcon className= "header_icon"/>
                <NotificationsIcon className= "header_icon"/>
                <Avatar className= "header_icon"/>
            </div>
        </div>
    )
}
