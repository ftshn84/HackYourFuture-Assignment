
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
console.log("Number of organic teas:", organicCount);
console.log("Number of non-organic teas:", unorganicCount);

