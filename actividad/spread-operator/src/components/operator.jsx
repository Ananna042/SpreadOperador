import { useState } from "react";
import Persona from "./persona";
import Productos from "./consigna";

export function Operator() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const [persona, setPersona] = useState({
    name: "Federico",
    alumno: "Thiago",
  });

  // Agregar número consecutivo
  const addNums = () => {
    setNums(prev => [...prev, prev[prev.length - 1] + 1]);
  };

  // Actualizar persona
  const updateName = () => {
    setPersona(prev => ({ ...prev, name: "Miguel" }));
  };

  return (
    <>
      <h3>Números:</h3>
      {nums.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
      <button onClick={addNums}>Agregar número</button>

      <h3>Persona:</h3>
      <Persona name={persona.name} />
      <button onClick={updateName}>Modificar persona</button>

      <h3>Productos con descuento:</h3>
      <Productos />
    </>
  );
}
