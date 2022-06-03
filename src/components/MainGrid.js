import CurrentGrid from "./CurrentGrid";
import classes from './MainGrid.module.css'

const MainGrid = (props) => {
  
  return (
    <div className={classes["main-grid"]}>
        <CurrentGrid  selected={props.selectedNumbers} />
    </div>
  );
};

export default MainGrid;
