import React, {useEffect, useRef, useState} from "react";
import AnagramDisplayByTime from "../components/snippets/AnagramDisplayByTime";
import {searchFilters} from "../components/logic/SearchFilters.ts";
import SearchRadioButtons from "../components/snippets/SearchRadioButtons";

/**
 * Simple list page showing all preloaded and input phrases and their anagram comparison results.
 *
 * @returns {Element}
 * @constructor
 */
function ListPage() {

  const searchText = useRef();
  const [items: AnagramPair[], setItems] = useState([]);
  const [searchTypeSelectedValue, setSearchTypeSelectedValue] = useState("STARTS_WITH");
  const itemList = items && items.length > 0
    ? items.map((item: AnagramTimestamped) => (<AnagramDisplayByTime data={item}/>))
    : (<p>Nothing to see here, move along.</p>);

  function onChangeSearch(event) {
    event.preventDefault();
    displayHistory(searchTypeSelectedValue);
  }

  const displayHistory = (searchType) => {
    let filterString = searchText.current?.value;
    filterString = filterString != null ? filterString.toLowerCase() : "";
    setItems(searchFilters(filterString, 'TIMESTAMP_HISTORY', searchType));
  }

  useEffect(() => {
    displayHistory(searchTypeSelectedValue);
  }, [searchTypeSelectedValue]);

  return (
    <section>
      <h2>List anagrams in order entered.</h2>
      <form>
        <SearchRadioButtons searchType={searchTypeSelectedValue} setSearchType={setSearchTypeSelectedValue}/>
        &nbsp; &nbsp;
        Search Original Phrases: &nbsp;
        <input type='text' id='searchTextId' ref={searchText} onChange={onChangeSearch}/>
      </form>
      {itemList}
    </section>
  );
}

export default ListPage;