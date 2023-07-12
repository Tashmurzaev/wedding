import { useRef } from "react";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Invitation from "./components/invitation/Invitation";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

function App() {
  const componentRefs = {
    component1: useRef(null),
    component2: useRef(null),
    component3: useRef(null),
    component4: useRef(null),
    component5: useRef(null),
  };

  const scrollToComponent = (componentName) => {
    componentRefs[componentName].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Navbar scroll={scrollToComponent} />
      <Header refOf={componentRefs.component1} />
      <Gallery refOf={componentRefs.component2} />
      <Invitation refOf={componentRefs.component3} />
      <Location refOf={componentRefs.component4} />
      <Footer />
    </div>
  );
}

export default App;
