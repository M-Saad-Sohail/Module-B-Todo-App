import { useState } from "react";
import "./App.css";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInpValue(e.target.value);
  };

  const addTodo = () => {
    if (inpValue.trim() !== "") {
      setTodoList([...todoList, inpValue]);
      setInpValue("");
    }
  };

  const startEditing = (index) => {
    setEditing(true);
    setEditIndex(index);
    setInpValue(todoList[index]);
  };

  const saveEdit = () => {
    if (editIndex !== null && inpValue.trim() !== "") {
      const updatedList = [...todoList];
      updatedList[editIndex] = inpValue;
      setTodoList(updatedList);
      setEditing(false);
      setEditIndex(null);
      setInpValue("");
    }
  };

  const cancelEdit = () => {
    setEditing(false);
    setEditIndex(null);
    setInpValue("");
  };

  return (
    <div className="App">
      <div className="bg-image">
        {/* ================================ANIMATION================================== */}
        {/* <div className="animation-area">
          <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> */}
        {/* ================================ANIMATION================================== */}
        <div>
          <h1 className="text-5xl font-semibold">ToDo Application</h1>
        </div>
        <div className="mt-16 w-full flex justify-center gap-x-4">
          <input
            onChange={handleInputChange}
            value={inpValue}
            type="text"
            placeholder="Add a todo"
            className="px-5 py-2 rounded-xl outline-none w-1/4"
          />
          <button
            onClick={editing ? saveEdit : addTodo}
            className="px-6 py-2 rounded-xl bg-[#ff3333] hover:bg-white border-4 border-[#ff3333] hover:text-[#ff3333] text-white"
          >
            {editing ? "Save" : "Add"}
          </button>
          {editing && (
            <button
              onClick={cancelEdit}
              className="px-6 py-2 rounded-xl bg-[#3333ff] hover:bg-white border-4 border-[#3333ff] hover:text-[#3333ff] text-white"
            >
              Cancel
            </button>
          )}
        </div>
        <div>
          <ul className="space-y-6 mt-10">
            {todoList.map((todo, index) => (
              <li
                className="bg-white border-4 border-[#ff3333] text-black max-w-full break-words rounded-xl flex items-center justify-between gap-x-10 py-2 px-3"
                key={index}
              >
                <div className="flex">
                  <span className="mr-2">{index + 1}.</span>
                  {editing && editIndex === index ? (
                    <input
                      type="text"
                      value={inpValue}
                      onChange={handleInputChange}
                      className="px-2 py-1 rounded-md outline-none w-full"
                    />
                  ) : (
                    <span>{todo}</span>
                  )}
                </div>
                <div className="flex gap-x-2">
                  <i
                    className="fa-solid fa-trash text-xl cursor-pointer"
                    onClick={() => {
                      const updatedList = todoList.filter(
                        (_, i) => i !== index
                      );
                      setTodoList(updatedList);
                    }}
                  ></i>
                  <i
                    className="fa-regular fa-pen-to-square text-xl cursor-pointer"
                    onClick={() => startEditing(index)}
                  ></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
