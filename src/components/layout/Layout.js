import classes from './Layout.module.css';
import NavbarMenu from "../menu/NavbarMenu";


function Layout(props) {
  return (
        <div>
          {/*<MainNavigation/>*/}
          <main className={classes.main}>{props.children}</main>
        </div>
  );
}

export default Layout;