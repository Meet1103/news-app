import React from "react";
import Channel from "./Name";

const ChannelList = ({ channels }) => {
    return (
        <div>
        {
            channels.map((channel,i) => {
            return (
            <Channel 
            key={channels[i].id}
            news={channels[i].name}
            />
            )
            })
        }
        </div>
    )
}

export default ChannelList;