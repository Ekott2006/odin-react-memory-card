import "./App.css";

import { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import myList from "./data";

function App() {
  const [list, setList] = useState([]);
  const [clickedList, setClickedList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const size = 12;

  useEffect(() => {
    setScore(clickedList.length);
    if (clickedList.length > bestScore) setBestScore(clickedList.length);
    const newList = [];
    while (newList.length < size) {
      const data = myList[Math.round(Math.random() * (myList.length - 1))];
      if (newList.findIndex((x) => x === data) === -1) {
        newList.push(data);
      }
    }
    setList(newList);
  }, [bestScore, clickedList]);

  function handleClick(value) {
    const index = clickedList.findIndex((a) => a === value);
    if (index === -1) {
      setClickedList([...clickedList, value]);
      return;
    }
    setClickedList([]);
  }

  return (
    <div className="root-body">
      <HeaderComponent score={score} bestScore={bestScore} />
      <div className="card-container">
        {list.map((x) => (
          <div onClick={() => handleClick(x)} key={x.id} className="card">
            <img src={x.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
