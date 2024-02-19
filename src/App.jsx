// import React from "react";

import { useState } from "react";
import Fruits from "./components/Fruits";
import FruitForm from "./components/FruitForm";

export default function App() {
  //userState = {etat; donne}
  const [fruits, setFruits] = useState([
    { id: 1, name: "Baname" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Pomme" },
    { id: 4, name: "Pamblemouse" },
    { id: 5, name: "Acajoux" },
  ]);

  const handleDelete = (id) => {
    //copie du state
    const fruitsCopy = [...fruits];
    //   //manipuler
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //   //modifier
    setFruits(fruitsCopyUpdated);
  };

  const handleadd = (fruitAAjouter) => {
    // on copie notre state
    const fruitsCopy = [...fruits];

    fruitsCopy.push(fruitAAjouter);
    setFruits(fruitsCopy);
  };
  // const AfficherFruitPreferer = (NomFruit) => {
  //   alert(`Mon fruit preferer est: ${NomFruit}`);
  // };
  //rendu
  return (
    <div className="app">
      <h1>Listes des fruits</h1>
      <ul className="liste">
        {/* parcourire le tableau fruits  */}
        {fruits.map((fruit) => (
          <Fruits
            key={fruit.id}
            fruitDetail={fruit}
            /**
             * Cette action permet de supprimer un fruit
            // actionClick={() => AfficherFruitPreferer(fruit.name)}
            */
            actionClick={() => handleDelete(fruit.id)}
          />
        ))}
      </ul>
      <div className="formulaire">
        {/* creation de mon formulaire pour ajouter  */}
        <FruitForm handleadd={handleadd} />
      </div>
    </div>
  );
}
