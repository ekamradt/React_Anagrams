const fetchHistoryByKey = (key) => {
  let aryString = sessionStorage.getItem(key);
  return aryString != null ? JSON.parse(aryString) : [];
}

/*
 * Save each result in Order with a sorted timestamp key
 */
function saveResultInStorage(result) {
  let key = 'TIMESTAMP_HISTORY';
  let ary = fetchHistoryByKey(key);
  ary.push({timestamp: new Date(), result: result});
  ary.reverse(((a, b) => b.timestamp - a.timestamp));
  sessionStorage.setItem(key, JSON.stringify(ary));
}

export default saveResultInStorage;