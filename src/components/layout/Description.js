import classes from './Description.module.css';

function Description(props) {
  return (
    <div className={classes.description}>
      <p>
        {props.children}
      </p>
    </div>
  );
}

export default Description;