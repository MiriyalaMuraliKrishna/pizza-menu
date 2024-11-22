import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let start = 10;
  const [state, setState] = useState(start);
  useEffect(function () {
    const interval = setInterval(() => {
      setState((start) => start - 1);
    }, 1000);

    // Clear the interval after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    // Cleanup interval and timeout when component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return <h1>React pizza app {state}</h1>;
}

export default App;
