import React from "react";
import { withRouter } from "react-router-dom"

const Name = ({ id , news , history }) => {
    return (
        <table className="table table-striped table-dark table-hover text-center">
            <tbody>
            <tr onClick={() => history.push(`/source/${id}`)}>
                <th scope="row">{news}</th>
            </tr>
            </tbody>
        </table>
    )
}

export default withRouter(Name);

