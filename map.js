const numbers = [3, 5, 6, 4, 9];
// system-1
const doubled = [];
for (num of numbers) {
    const double = num * num;
    doubled.push(double);
}
// console.log(doubled);
// system-2
function doubleIt(num) {
    return num * num;
}
const result = numbers.map(doubleIt);
console.log(result)

// system-3
const doubled2 = numbers.map(num => num * num);
// console.log(doubled2);

