import React from "react";

const Search = ({ onSearchChange }) => {
    return (
        <div className="w-50 mx-auto input-group input-group-sm mb-3">
            <input type="text" onChange={onSearchChange} className="form-control text-center font-weight-bolder" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
    )
}

export default Search;