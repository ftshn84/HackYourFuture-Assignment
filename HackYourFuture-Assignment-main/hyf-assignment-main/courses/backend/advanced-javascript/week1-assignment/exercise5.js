import { teas } from "./teas.js";
//Create a search function for the tea shop:



function searchTeas(teas, query) {
    return teas
        .filter(tea => tea.name.toLowerCase().includes(query.toLowerCase())) // Return teas where the name contains the query (case-insensitive)
        .map(tea => tea.name) // Return just the names
        .sort(); // sorted alphabetically
}

console.log(searchTeas(teas, "earl"));
// Returns: ["Earl Grey"]

console.log(searchTeas(teas, "dragon"));
// Returns: ["Dragon Well"]

console.log(searchTeas(teas, "ch"));
// Returns: ["English Breakfast", "Genmaicha", "Lapsang Souchong"]
//Hint: Use.toLowerCase() and.includes() for case -insensitive search.

