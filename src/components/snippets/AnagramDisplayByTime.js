import React from "react";
import {AnagramPair} from "../../interfaces/AnagramPair.ts";

/**
 * Show a single AnagramPair on the screen.
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
function AnagramDisplayByTime(props) {
  const item: AnagramPair = props.data;
  return (
    <ul>
      <li> {new Date(item.timestamp).toISOString()
        .replace("T", " ")
        .replace("Z", "")
      }
        &nbsp;
        <strong> &nbsp; {item.result.match ? "Match" : "No Match"}</strong>
      </li>
      <ul>
          <pre>
          <li>Phrase 1 : <b>{item.result.result1.original} / {item.result.result1.processed}</b></li>
          <li>Phrase 2 : <b>{item.result.result2.original} / {item.result.result2.processed}</b></li>
          </pre>
      </ul>
    </ul>
  );
}

export default AnagramDisplayByTime;