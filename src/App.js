import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <Navbar />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
