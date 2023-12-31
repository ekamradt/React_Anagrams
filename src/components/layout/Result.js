import classes from './Result.module.css';
function Result(props) {
  return (
    <div className={classes.result} >{props.children}</div>
  );
}

export default Result;