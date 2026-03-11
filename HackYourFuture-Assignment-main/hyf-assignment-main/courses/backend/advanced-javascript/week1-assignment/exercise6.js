import { teas } from "./teas.js";
//Calculate the total value of all tea inventory using reduce:



const totalValue = teas.reduce((sum, tea) => {
    sum += tea.pricePerGram * tea.stockCount;// add pricePerGram * stockCount to sum
    return sum;


}, 0);

console.log("Total inventory value:", totalValue);
//Hint: reduce builds up a single value by processing each item. The 0 is your starting value.