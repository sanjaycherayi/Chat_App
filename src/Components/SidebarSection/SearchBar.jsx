import React from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../Redux/Chat/action";

function SearchBar() {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <div className="row searchBox">
      <div className="col-sm-12 searchBox-inner">
        <div className="form-group has-feedback">
          <input
            id="searchText"
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search"
            onChange={handleSearchInputChange}
          />
          <span className="glyphicon glyphicon-search form-control-feedback" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
