import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Avatar from '@material-ui/core/Avatar';
import "./ChannelRow.css"
function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className = "ChannelRow">
            <Avatar className="channelRow_logo" src = {image}>
            </Avatar>
            <div className="channelRow_text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />} </h4>
                <p> {subs} subscribers |   {noOfVideos} videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
