import React from "react";

const NoChannel = ( { channels }) => {
    return (
        <div>
        {
        (channels.length === 0) ? 
            <div>
                <table className="table table-striped table-dark table-hover text-center">
                    <tbody>
                    <tr>
                        <th scope="row">No Result Found</th>
                    </tr>
                    </tbody>
                </table>
            </div> : null
        }
        </div>
    )
}

export default NoChannel;