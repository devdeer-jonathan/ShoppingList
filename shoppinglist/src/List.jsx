import { useContext } from "react";
import Item from "./Item";
import ItemsContext from "./ItemsContext";

const List = () => {
  const [items, _] = useContext(ItemsContext);
  const content = items.map((item) => (
    <Item item={item} disabled={true}></Item>
  ));

  return (
    <div className="itemContainer">
      <h1 className="shopping-list-title">Shopping List</h1>
      <ul>{[...content, <Item placeholder="Neues Item"></Item>]}</ul>
    </div>
  );
};
export default List;
