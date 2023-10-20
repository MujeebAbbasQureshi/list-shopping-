import { useState } from 'react'
const App = ()  =>{
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const addItem = () =>{
    setList([...list, {id: list.length + 1, title: value}]);
    setValue("");
  };
  const deleteItem = (id) => {
    const sortedList = list.filter(item => item.id !== ids);
    setList(sortedList);
  };
  return(
    <div className="container">
      <h1 className="title">Shopping List</h1>
      <div className="input-container">
        <input
        type="text"
        className="item-input"
        placeholder="Add an item"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <button className="add-button"onClick={() =>addItem()}>
        Add
        </button>
      </div>
      <ul className="item-list">
        {list.map((item) =>(
          <li className="item">
            {item.title}
            <button className="delete-button" onClick={() => deleteItem()}>
            Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};
export default App;
