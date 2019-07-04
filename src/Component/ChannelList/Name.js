import React from "react";

const Name = ({ news }) => {
    return (
        <table class="table table-striped table-dark table-hover text-center">
            <tbody>
            <tr>
                <th scope="row">{news}</th>
            </tr>
            </tbody>
        </table>
    )
}

export default Name;

