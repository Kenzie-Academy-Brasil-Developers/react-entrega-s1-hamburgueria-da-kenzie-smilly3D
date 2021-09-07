import { useState } from "react";

const Filter = ({ showProducts, reset }) => {
  const [filterInput, setFilterInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={filterInput}
        onChange={(event) => setFilterInput(event.target.value)}
      />
      <button onClick={() => showProducts(filterInput)}>Filtrar</button>
      <button onClick={() => reset(setFilterInput)}>Reset Filtro</button>
    </>
  );
};
export default Filter;
