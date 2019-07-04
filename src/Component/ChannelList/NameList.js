import React from "react";
import Name from "./Name";

const NameList = ({ channels }) => {
    return (
        <div>
        {
            channels.map((channel,i) => {
            return (
            <Name 
            key={channels[i].id}
            news={channels[i].name}
            />
            )
            })
        }
        </div>
    )
}

export default NameList;