import {Link} from "react-router-dom";

/**
 * A sample about page.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function AboutPage() {

  const ExternalLink = ({to, description}) => {
    return (
      <Link to={to} target="_blank">
        {description}
      </Link>
    );
  };

  return (
    <section>
      <p>
        <h3>Learning</h3>
        This is my first attempt at a React single page app. I knew enough Javascript, Typescript, HTML, CSS,
        and converting a Node.js app, that React just made sense.
        <br/>
        <br/>
        I was asked, in two different technical interviews, to twll if two word were Anagrams.
      </p>
      <p>
        <br/>
        <h3>Contact</h3>
        <ExternalLink description="Eric Kamradt" to="https://www.linkedin.com/in/erickamradt/"/>
      </p>
    </section>
  );
}

export default AboutPage;