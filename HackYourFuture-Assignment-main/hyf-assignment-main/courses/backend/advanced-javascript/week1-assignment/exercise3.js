import { teas } from "./teas.js";

//Create a function that returns teas with low stock (less than 50 items):
function lowStockAlert(teas) {
    return teas
        .filter(tea => tea.stockCount < 50)
        .map(tea => ({ name: tea.name, stockCount: tea.stockCount }))// Return array of objects with name and stockCount
        .sort((a, b) => a.stockCount - b.stockCount);// sorted by stockCount (lowest first)
}

console.log(lowStockAlert(teas));
