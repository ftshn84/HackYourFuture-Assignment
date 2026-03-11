import { teas } from "./teas.js";
//Exercise 2: Inventory Report ⭐
//Build a function that generates an inventory report:



function inventoryReport(teas) {
    return {
        totalTeas: teas.length,
        inStock: teas.filter(tea => tea.inStock).length,
        outOfStock: teas.filter(tea => !tea.inStock).length,
        totalInventoryValue: teas.reduce((total, tea) => total + tea.pricePerGram * tea.stockCount, 0),
        averagePrice: teas.reduce((total, tea) => total + tea.pricePerGram, 0) / teas.length
    };
}

console.log(inventoryReport(teas));