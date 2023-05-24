import "./searchBar.css";
import { useState, useRef } from 'react';

const SearchBar = ({ id, placeholder, width }) => {

    const style = {
        width: width === null ? "auto" : width,
    }

    const [search, setSearch] = useState(""); //set and stores the input value for search
    const sbar = useRef(null); // craate a connection with the input element


    const handleClear = () => {
        setSearch(""); //clear all the stored values inside the search state
        sbar.current.value = ""; //clear the value of input searchh element
    }

    return (
        <div className="search-bar-container" style={style}>
            <input type="text" ref={sbar} id={id} className="search-bar" placeholder={placeholder} onChange={e => setSearch(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
            <i role="button" className="fa-solid fa-xmark" onClick={handleClear}></i>
        </div>
    );
}

export default SearchBar;