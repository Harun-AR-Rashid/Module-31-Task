// var let const
// let and const block scope variable
// let do re-assign  but const don't re-assign
/**
 * default parameters
 * template string
 * arrow function 
 * spread operator and destructuring
 * object.keys, object.values, object,entries
 * for of loops execute in array and string variable
 * for in loops execute in object variable
 */

// const friends = ['liza', 'lisa', 'humayara', 'halima', 'harun', 'noyan'];
const students = [
    {
        name:'halima',
        village:'kantonagar',
        study:'Pirganj Govt. College',
        subject:'English',
        rank:58
    },
    {
        name:'Harun',
        village:'Shamgore',
        study:'Dinajpur Govt. College',
        subject:'Math',
        rank:27
    },
    {
        name:'Huamyara',
        village:'Setabganj',
        study:'Setabganj Govt. College',
        subject:'ICT',
        rank:20
    }
]

let friends = [
    [
        { name: "John", age: 25, city: "New York", hobbies: ["reading", "hiking"] },
        { name: "Sarah", age: 30, city: "London", hobbies: ["painting", "cycling"] }
    ],
    [
        { name: "Mike", age: 28, city: "Toronto", hobbies: ["photography", "gaming"] },
        { name: "Emily", age: 22, city: "Sydney", hobbies: ["traveling", "dancing"] }
    ]
];

// const result = friends[0][1].hobbies[1];
const result = friends[0][1].city;
console.log(result)

const studentResust = students[1].study;
console.log(studentResust);