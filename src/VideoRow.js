import React from 'react'
import "./VideoRow.css"
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function VideoRow({views,channelLogo,verified, subs, description, timestamp, channel, title, image}) {
    return (
        <div className = "VideoRow">
            <img src={image} alt=""/>
            <div className="VideoRow__info">
                <h3>{title}</h3>
                    <p><span className = "VideoRow__Views">{views} views</span> <span className = "VideoRow__timestamp"> {timestamp} </span></p>
                <p className = "VideoRow__Channel">
                   <Avatar src = {channelLogo} className = "VideoRow__avatar"/>
                   {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
                </p>
                <p className="VideoRow__description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
