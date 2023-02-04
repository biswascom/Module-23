const names = "Ariful";
const age = 23;
const isMarried = false;
const friends = {
    hisName: "Badsha",
    age: 23,
    isMarried: false,
    id: 21
};
const array = [23, 22, 13, 55, 35, 87, 09, 99];

console.log (typeof names);
console.log (typeof age);
console.log (typeof isMarried);
console.log (typeof friends);
console.log (Array.isArray(array));

const array2 = [44, 55, 66, 77, 88, 99, 00];
const addArrays = array.concat(array2);
console.log (addArrays);

if (array.indexOf(55) !== -1) {
    console.log (true);
}
else {
    console.log (false);
}

if (array.includes(55) === true) {
    console.log ("Array te number ache")
}
else {
    console.log ("Array te number nei")
}