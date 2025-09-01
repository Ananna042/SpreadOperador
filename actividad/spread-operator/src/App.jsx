import { useEffect } from "react";
import "./App.css";
import { Operator } from "./components/operator";

function App() {
  useEffect(() => {
    //useEffect ejecuta el codigo una vez si no hay nada en los
    //corchetes, y si hay variables(dependencias)
    //se va a ejecutar tanto como actualice
  }, []);

  return (
    <>
      <Operator />
    </>
  );
}

export default App;
