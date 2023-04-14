import { useState } from "react";
import "./App.css";
import B2DCalculator from "./components/B2DCalculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <B2DCalculator />
    </div>
  );
}

export default App;
