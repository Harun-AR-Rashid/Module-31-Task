// filter selects elements based on a condition and return an array with the elements that fulfiled the conditions

const numbers = [12, 212, 32, 445, 98];
// const output = numbers.filter(n => n % 2 ==0);
// console.log(output);
// output.push(25);
// // output.shift();
// output.unshift();
// const output2 = output.reduce((a, b) => a + b, 0);
// console.log(output2);
const output = numbers.filter(n => n<10);
console.log(output);

const friends = ['halima', 'harun', 'lisa', 'nisa', 'liza','mou'];
const result= friends.filter(friend=>friend.length<4);
console.log(result);