import CompareForm from "../routes/CompareForm";
import Description from "../components/layout/Description";

/**
 * Compare two input phrases to se if they are anagrams.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function HomePage() {
  return (
    <div>
      <h3>Description</h3>
      <Description>
        <p>
          A simple application that accepts two phrases and returns weither or not they
          are an anagram of each other.  This app is pre-populated with a few anagrams.
        </p>
      </Description>
      <CompareForm/>
    </div>
  );
}

export default HomePage;