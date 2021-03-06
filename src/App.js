import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Support />
    </div>
  );
}

export default App;
