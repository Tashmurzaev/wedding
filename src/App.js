import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
