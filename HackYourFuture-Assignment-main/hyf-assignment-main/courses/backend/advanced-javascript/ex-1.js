
import { teas as data } from "./data/teas.js";
//console.log("hello world");
//console.log(data);
//console.log(data.map(tea => tea.name).join(", "));
//console.log(data.map(tea => `${tea.name} (${tea.origin})`).join(", "));

// Count how many teas are organic
let organicCount = 0;
let unorganicCount = 0;
data.forEach(tea => {
    if (tea.organic === true) {
        organicCount++;
    }
    else {
        unorganicCount++;//console.log(`${tea.name} is not organic.`);
    }
});
//console.log("Number of organic teas:", organicCount);
//console.log("Number of non-organic teas:", unorganicCount);


const names = data.map(function (tea) {
    return tea.name
})
//console.log(names);
//Part 3: filter
//filter keeps items that match. Fewer items out, same shape.
//Get all organic teas.
const matchItem = data.filter(function (tea) {
    return tea.organic === true;
});
//console.log(matchItem);
//Get all teas from Japan.
const japanTeas = data.filter(function (tea) {
    return tea.origin == "Japan";
})
//console.log(japanTeas);
//Exercise 9
//Get all teas with caffeineLevel equal to "high"
const caffeineLevelIeas = data.filter(function (tea) {
    return tea.caffeineLevel === "high"
})
console.log(caffeineLevelIeas);