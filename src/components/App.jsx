import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  // The list of all toys (starts empty)
  const [toys, setToys] = useState([]);

  // Runs one time when the page loads: get all toys from the backend
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  // Adds one new toy to the end of our list
  function addToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Removes the toy with this id from our list
  function deleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  // Swaps the updated toy into the list, keeping the same order
  function updateToy(updatedToy) {
    setToys(toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy)));
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={deleteToy}
        onUpdateToy={updateToy}
      />
    </>
  );
}

export default App;