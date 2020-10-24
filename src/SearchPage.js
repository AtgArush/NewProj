import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import "./searchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
function SearchPage() {
    return (
        <div className = "searchPage">
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr></hr>
        <ChannelRow 
        image = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        channel = "Coder's Backyard"
        verified
        subs = "452k"
        noOfVideos = {250}
        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <ChannelRow 
        image = "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        channel = "Hitesh"
        subs = "257k"
        noOfVideos = {127}
        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <hr></hr>
        <VideoRow 
        verified
        views = "41k"
        channel = "Coder's Backyard"
        description = "Lorem ipsum dolor sit amet consectetur adipiscing"
        subs = "20M"
        title = "Js Course Introduction"
        image = "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        timestamp = "2 weeks ago"
        channelLogo = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <VideoRow 
        verified
        views = "22k"
        channel = "Coder's Backyard"
        description = "Lorem ipsum dolor sit amet consectetur adipiscing"
        subs = "20M"
        title = "Learn to code in Javascript"
        image = "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        timestamp = "3 weeks ago"
        channelLogo = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <VideoRow 
        views = "244k"
        channel = "Hitesh"
        description = "Lorem ipsum dolor sit amet consectetur adipiscing"
        subs = "20M"
        title = "Basics of Web design"
        image = "https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        timestamp = "2 months ago"
        channelLogo = "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <VideoRow 
        views = "22k"
        channel = "Web Developer page"
        description = "Lorem ipsum dolor sit amet consectetur adipiscing"
        subs = "20M"
        title = "Javascript introduction and concepts"
        image = "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        timestamp = "6 days ago"
        channelLogo = "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        </div>
    )
}

export default SearchPage
