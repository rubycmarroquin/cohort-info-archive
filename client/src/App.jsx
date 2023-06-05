import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import CodeThread from "./components/CodeThread";
import ListStudents from "./components/ListStudents";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <CodeThread />
      {/* <ListStudents /> */}
    </div>
  );
}

export default App;
