import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  function filterMonsters() {
    const searchValue = searchField.trim().toLowerCase();
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue)
    );
  }

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        handleChange={(e) => setSearchField(e.target.value)}
        placeholder="search monsters"
      />
      <CardList monsters={filterMonsters()} />
    </div>
  );
}

export default App;
