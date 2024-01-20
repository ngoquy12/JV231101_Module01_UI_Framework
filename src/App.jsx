import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Antd from "./components/Antd";
import Material from "./components/Material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Antd /> */}
      <Material />
    </>
  );
}

export default App;
