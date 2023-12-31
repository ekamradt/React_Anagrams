import classes from './CompareForm.module.css';
import {useRef, useState} from "react";
import Card from "../components/layout/Card";
import CompareResult from "./CompareResult";
import saveResultInStorage from "../components/logic/AnagramStorage";
import {compareAnagrams} from "../components/logic/CompareAnagrams.js";

/**
 * Accept two string phrases and evaluate if they are anagrams or not.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CompareForm(props) {
  let [showResultCard, setShowResultCard] = useState(false);
  let [processedResults, setProcessedResults] = useState(null);

  const firstPhraseImportRef = useRef();
  const secondPhraseImportRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstPhrase = firstPhraseImportRef.current.value;
    const enteredSecondPhrase = secondPhraseImportRef.current.value;
    const results = compareAnagrams(enteredFirstPhrase, enteredSecondPhrase);
    setProcessedResults(results);
    saveResultInStorage(results);
    setShowResultCard(true);
  }

  function clearForm(event) {
    event.preventDefault();
    firstPhraseImportRef.current.value = "";
    secondPhraseImportRef.current.value = "";
    setShowResultCard(false);
    setProcessedResults(null);
  }

  return (<div>
    <Card>
      <h2>Compare Phrases for Anagrams</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='First Phrase'>First Phrase</label>
          <input type='text' required id='firstPhrase' ref={firstPhraseImportRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Second Phrase'>Second Phrase</label>
          <input type='text' required id='secondPhrase' ref={secondPhraseImportRef} />
        </div>
        <div className={classes.actions}>
          <button>Compare Phrases</button>
          <button onClick={clearForm}>Clear</button>
        </div>
      </form>
    </Card>
    {showResultCard && <CompareResult results={processedResults}/>}
  </div>);
}

export default CompareForm;