const array = [11, 22, 33, 44, 55, 54, 66, 77, 88, 99, 100];

const partialSlice = array.slice(1, 5);
console.log (partialSlice);

const partialSplice = array.splice(1, 5);
console.log (partialSplice);
console.log (array);

const newSplice = array.splice(0, 3, 555, 777, 999);
console.log (newSplice);

console.log (array);
