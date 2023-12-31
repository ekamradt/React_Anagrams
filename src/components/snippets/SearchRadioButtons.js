//import {searchTypeMap} from "../logic/SearchTypeMap";
import React from "react";
import {searchTypeMap} from "./SearchTypeMap";

/**
 * Show radio buttons allowing changing of the serach filter.
 * [ startsWith, endsWith, and contains/includes ]
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
function SearchRadioButtons(props) {
  const buttons = searchTypeMap.map(option => (
    <label>
      <input
        type="radio"
        name="searchTpeRadioGroup"
        value={option.key}
        checked={props.searchType === option.key}
        onChange={() => props.setSearchType(option.key)}
      />
      {option.label}
    </label>
  ));
  return (<>{buttons}</>);
}

export default SearchRadioButtons;
