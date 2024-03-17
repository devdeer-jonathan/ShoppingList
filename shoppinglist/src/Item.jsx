import { useContext, useState } from "react";
import ItemsContext from "./ItemsContext";

const Item = (props) => {
  const [items, setItems] = useContext(ItemsContext);
  const [item, setItem] = useState(props.item);

  return props.disabled ? (
    <div className="Item">
      <input type="text" disabled={props.disabled} />
      <button onClick={(_) => removeItem()}>-</button>
    </div>
  ) : (
    <div className="addItem">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={(_) => addItem()}>+</button>
    </div>
  );
  function removeItem() {
    const filteredArray = items.filter((i) => i !== item);
    setItems(filteredArray);
    setItem("");
  }
  function addItem() {
    if (String(item).trim() !== "" && !items.includes(item)) {
      setItems((items) => [...items, item]);
    }
  }
};

export default Item;
