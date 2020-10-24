import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./videoCard.css"

function VideoCard({image, title, channelName, timeStamp, ChannelImage, views}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="videoCard__thumbnail"/>
            <div className="video__info">
                <Avatar className="video__avatar" src = {ChannelImage}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <h6>{channelName}</h6>
                    <div className="info_two">
                    <p className="views">{views} </p>
                    <p className="timestamp">{timeStamp}</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default VideoCard
