const name = "Joven V. Coranes";
const favorites = ["Marvel Movies"," PondPhuwin"," Kagura "];

console.log
(((person) => `Name: {person}; age:19`)(name));

console.log
(favorites.map((favorite)=> favorite.toLowerCase()).join(","));

console.log
(((items) => `There are {items.length} favorites listed.`)(favorites));
