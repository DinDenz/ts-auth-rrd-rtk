import { useState } from "react";
import "./styles.css";

export default function App() {
  const lakeAnimals = [
    { id: 1, name: "Pike", type: "fish" },
    { id: 2, name: "Crucian carp", type: "fish" },
    { id: 3, name: "Catfish", type: "fish" },
    { id: 4, name: "Catfish_1", type: "fish" },
    { id: 5, name: "Trout", type: "fish" },
    { id: 6, name: "Beaver", type: "mammal" },
    { id: 7, name: "Otter", type: "mammal" },
    { id: 8, name: "Nutria", type: "mammal" },
    { id: 9, name: "Water rat", type: "mammal" },
    { id: 10, name: "Carp", type: "fish" },
  ];

  const [caughtAnimals, setCaughtAnimals] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [warning, setWarning] = useState("");

  //return Math.floor(Math.random() * max);

  const getRandomAnimal = () => {
    const index = Math.floor(Math.random() * lakeAnimals.length);
    setRandomIndex(index);
    setWarning("");

    const animal = lakeAnimals[index];

    if (animal.type === "fish") {
      setCaughtAnimals((prev) => [...prev, animal]);
    } else {
      setWarning(
        `Warning: ${animal.name} - This is a mammal, you can't catch it!`
      );
    }
  };

  return (
    <div className="App">
      <div>
        <h2>All animals of the lake</h2>
        <ul>
          {lakeAnimals.map((animal) => (
            <li key={animal.id}>
              {animal.name} ({animal.type})
            </li>
          ))}
        </ul>

        <button onClick={getRandomAnimal}>Try to catch the animal</button>

        {randomIndex !== null && (
          <p>
            The number that came up: {randomIndex + 1} (index: {randomIndex})
          </p>
        )}

        {warning && <p style={{ color: "red" }}>{warning}</p>}

        <h2>Caught animals (basket)</h2>
        <ul>
          {caughtAnimals.map((animal, index) => (
            <li key={`${animal.id}-${index}`}>{animal.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//render all animals in the list
//create the basket and pick random animals from the lake.
//leave fishes in the basket (another list)
//you should be able to clear the basket
