import React from "react";
const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa3">
            <input 
            className="pa2 b--blue bg-lightest-white br2"
            type="search" 
            placeholder="Find a Robot" 
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;