import Result from "../components/layout/Result";
import classes from "./CompareResult.module.css";

/**
 * Show the results of two input phases, if they are anagrams or not.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CompareResult(props) {

  const results = props.results;

  return (
    <Result>
      <h2>Results [ {results.match ? 'Match!' : 'No Match!'} ]</h2>

      <div>
        <table className={classes.table}>
          <thead className={classes.thead}>
          <tr key="1">
            <td>&nbsp;</td>
            <td>Original</td>
            <td>Processed</td>
          </tr>
          </thead>
          <tbody className={classes.tbody}>
          <tr key="2">
            <td><strong>Phrase 1</strong></td>
            <td>{results.result1.original}</td>
            <td>{results.result1.processed}</td>
          </tr>
          <tr key="3">
            <td><strong>Phrase 2</strong></td>
            <td>{results.result2.original}</td>
            <td>{results.result2.processed}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </Result>
  );
}

export default CompareResult;
