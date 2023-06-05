import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import CodeThread from "./components/CodeThread";
import ListStudents from "./components/ListStudents";

function App() {
  // will need to make a get request to get all of the code threads
  const threads = [
    { id: 1, title: "Challenge 1", date: "06/03/2023" },
    { id: 2, title: "Challenge 2", date: "06/04/2023" },
  ];

  const threadsList = threads.map((thread) => (
    <CodeThread key={thread.id} title={thread.title} date={thread.date} />
  ));

  return (
    <div className="App">
      <MyNavBar />
      {threadsList}
      <button>Start New Thread</button>
    </div>
  );
}

export default App;
