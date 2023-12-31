import {searchTypeMap} from "../snippets/SearchTypeMap";

//
// A series of functions used to filter the anagram data stored
//  in sessionStorage.
//

function searchFilters<AnagramPair>(filterString: String, storageKey: String, filterType: String): AnagramPair[] {
    return filterThis(filterString, storageKey, filterType, originalValues);
}


function processedFilter<AnagramPair>(filterString: String, storageKey: String, filterType: String): AnagramPair[] {
    return filterThis(filterString, storageKey, filterType, processedValues);
}

function filterThis<AnagramPair>(filterString: String, storageKey: String, filterType: String, valueFunction: Function): AnagramPair[] {
    const items: Type[] = [];
    const resultsString = sessionStorage.getItem(storageKey);
    if (resultsString == null) {
        return;
    }
    const results = JSON.parse(resultsString);

    for (let i = 0; i < results.length; i++) {
        const values = valueFunction(results, i);
        if (filterObject(filterType).filter(values.value1, filterString) ||
            filterObject(filterType).filter(values.value2, filterString)) {
            items.push(results[i]);
        }
    }
    return items;
}

const filterObject = (filterType) => {
    return searchTypeMap.find((search) => {
        return search.key === filterType;
    });
}

const originalValues = (results, index) => {
    return {
        value1: results[index].result.result1.original.toLowerCase(),
        value2: results[index].result.result2.original.toLowerCase(),
    }
}
const processedValues = (results, index) => {
    return {
        value1: results[index].result.result1.processed.toLowerCase(),
        value2: results[index].result.result2.processed.toLowerCase(),
    }
}

export {processedFilter, searchFilters};