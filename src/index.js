import React from "react";
import ReactDOM from "react-dom/client";

const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];

/**
 * changed the content of the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
  return <li key={i}>{singleAnimal.label}</li>;
});
const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(<ul>{animalsInHTML}</ul>);
