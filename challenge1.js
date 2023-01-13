console.log(`1. Given an array of strings, return only the strings that have exactly 4 characters.`);
// overall goal is to print strings with EXACTLY 4 characters
// for and if statements
// output should return: Josh, Russ, Rich
var names = ["Josh", "Russ", "Denzel", "Tim", "Rich"];

for (var i = 0; i <names.length; i++) {
    var correctName = names[i];
    if (correctName.length === 4) {
        console.log(correctName);
    }
};

console.log(`2. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.`);
// overall goal is to print every word in array in all lowercase
// for statements and toLowerCase
// output should be in all lowercase
var animals = ["Tiger", "liOn", "moNKeY", "BEar"];

for (i = 0; i < animals.length; i++) {
    console.log(animals[i].toLowerCase());
};

console.log(`3. Given an array of strings, return only the words that begin with the letter "t".`);
// overall goal is to only [print words that begin with the letter "t"]
// for and if statements
// output should print: toys, tables, tops
var items = ["toys", "flags", "posters", "tables", "tops", "games"];

for (i = 0; i < items.length; i++) {
    // console.log(items[i].startsWith("t"));
    var itemsT = items[i];
    if (itemsT.startsWith("t")) {
        console.log(itemsT)
    }
};