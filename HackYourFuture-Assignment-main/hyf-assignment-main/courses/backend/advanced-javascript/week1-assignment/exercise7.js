import { teas } from "./teas.js";
//Use reduce to count how many teas of each type exist:



const countByType = teas.reduce((counts, tea) => {
    if (!counts[tea.type]) {
        counts[tea.type] = 0;
    }
    counts[tea.type]++;
    return counts;
}, {});

console.log(countByType);
// Expected: { green: 6, black: 6, herbal: 4, oolong: 2, white: 2 }