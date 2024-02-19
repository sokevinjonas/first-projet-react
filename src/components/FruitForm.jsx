// import React from 'react'
import { useState } from "react";
import PropTypes from "prop-types";
export default function FruitForm({ handleadd }) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");

  //comportement
  // comportement du form /
  const handleSubmit = (event) => {
    //on inclue un evenenment pour empecher le rechargement de la page
    event.preventDefault();
    // alert("Submit");

    //on manipule
    const nom = nouveauFruit;
    const id = new Date().getTime();
    const fruitAAjouter = { id: id, name: nom };
    handleadd(fruitAAjouter);
    //vider le input
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="ajouter un fruit"
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
}
// Validation de type pour la prop handleadd
FruitForm.propTypes = {
  handleadd: PropTypes.func.isRequired,
};
