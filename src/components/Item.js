import classes from "./Item.module.css";
const Item = (props) => {
  const bingoNumber = () => {
    props.isSelected(props.children);
  };

  return (
    <button
      onClick={bingoNumber}
      className={
        props.list.includes(props.children) ? classes["item-win"] : classes.item
      }
    >
      {props.children}
    </button>
  );
};

export default Item;
