import { teas } from "./teas.js";
//Create a function that groups teas by their origin country:

function teasByOrigin(teas) {
    // Return object where keys are origins and values are arrays of tea names
    return teas.reduce((result, tea) => {
        if (!result[tea.origin]) {
            result[tea.origin] = [];
        }
        result[tea.origin].push(tea.name);
        return result;
    }, {});
}

console.log(teasByOrigin(teas));