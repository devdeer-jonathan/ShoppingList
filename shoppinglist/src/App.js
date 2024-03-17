import "./App.css";
import List from "./List";
import ItemContext from "./ItemsContext";
import { useState } from "react";

function App() {
  const items = useState([]);
  return (
    <ItemContext.Provider value={items}>
      <List />
    </ItemContext.Provider>
  );
}

export default App;
