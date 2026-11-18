import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

    // Removes the toy with this id from our list
  function deleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
      <ToyContainer toys={toys} onDeleteToy={deleteToy} />
    </>
  );
}

export default App;
