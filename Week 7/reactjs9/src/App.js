import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true; // change to false to see IndianPlayers

  return (
    <div className="App">
      <h1>🏏 Cricket App 🏏</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
