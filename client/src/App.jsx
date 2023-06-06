import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListChallenges from "./components/ListChallenges";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListChallenges />
    </div>
  );
}

export default App;
