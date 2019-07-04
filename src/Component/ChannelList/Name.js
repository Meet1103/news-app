import React from "react";

const Channel = ({ news }) => {
    return (
        <ul className="list-group text-center">
            <li className="list-group-item font-weight-bolder">{news}</li>
        </ul>
    )
}

export default Channel;