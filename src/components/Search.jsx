import React from "react";
import "../style.css";




function Search(props) {
  return (
    <>
          <div className="search">
            <div className="searchBar">
              <input type="text" placeholder="Search" onChange={props.userInput} />
            </div>
            <div className="searchIcon" onClick={props.onClicksearchIcon}>
              <img src="../Assets/search.png" alt="Search" />
            </div>
          </div>
        

    </>
  );
}

export default Search;
