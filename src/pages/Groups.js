import React, {useEffect, useRef, useState} from "react";
import {processedFilter} from "../components/logic/SearchFilters.ts";
import {AnagramPair} from "../interfaces/AnagramPair.ts";
import SearchRadioButtons from "../components/snippets/SearchRadioButtons";

/**
 * Show phrases grouped by their letters in the words, sorted.
 *
 * @returns {Element}
 * @constructor
 */
function GroupsPage() {

  const searchText = useRef();
  const [items: AnagramPair[], setItems] = useState([]);
  const [searchTypeSelectedValue, setSearchTypeSelectedValue] = useState("STARTS_WITH");

  const getItemMap = () => {
    const tempMap: Map<String, String[]> = new Map();

    // Add a new item to the map
    const appendItem = (original, processed) => {
      // Not very optimized, and this is just a POC.
      let list = tempMap.get(processed) || [];
      list.push(original);
      list = [...new Set(list)].sort();
      tempMap.set(processed, list);
    };

    for (const item of items) {
      appendItem(item.result.result1.original, item.result.result1.processed);
      appendItem(item.result.result2.original, item.result.result2.processed);
    }

    // Sort the Map
    return new Map([...tempMap.entries()].sort());
  }

  const showAnagrams = () => {
    const itemMap = getItemMap();
    return (
      <div>
        {[...itemMap.keys()].map(k => (
          <ul>
            <li key={k}>{k}</li>
            <ul>
              {itemMap.get(k).map(val => (
                <li>{val}</li>
              ))}
            </ul>
          </ul>
        ))
        }
      </div>
    );
  }

  function onChangeSearch(event) {
    event.preventDefault();
    showGroups(searchTypeSelectedValue);
  }

  function showGroups(searchType) {
    let filterString = searchText.current?.value;
    filterString = filterString != null ? filterString.toLowerCase() : "";
    const ary: AnagramPair[] = processedFilter(filterString, 'TIMESTAMP_HISTORY', searchType);
    setItems(ary ? ary : []);
  }

  useEffect(() => {
    showGroups(searchTypeSelectedValue);
  }, [searchTypeSelectedValue]);

  return (
    <section>
      <h2>Grouped by Anagram's Letters</h2>
      <form>
        <SearchRadioButtons searchType={searchTypeSelectedValue} setSearchType={setSearchTypeSelectedValue}/>
        &nbsp; &nbsp;
        Search Anagram Letters: &nbsp; <input type='text' id='searchTextId' ref={searchText} onChange={onChangeSearch}/>
      </form>
      {(items.length === 0 ? <p>Nothing to see here, move along.</p> : showAnagrams())}
    </section>
  );
}

export default GroupsPage;