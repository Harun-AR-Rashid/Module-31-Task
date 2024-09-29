const numbers = [12, 10, 15, 16];
const bonus = numbers.map(n => n * 8);
// console.log(bonus);
const bonus2 = numbers.map(x => x / 2);
// console.log(bonus2)

const friends = ['halima', 'harun', 'lisa', 'nisa', 'liza'];
const result = friends.map(fri => fri.length);
console.log(result);
const result1 = friends.map(fri => fri[0]);
console.log(result1);