// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
const output = data.Sophia.study[1].secondary[1].location;
console.log(output);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
const output1 = students['2222'].address.city;
console.log(output1)
const output2 = students['3333'].name;
console.log(output2)

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

const output3 = data2.data[0].bookDetails.name;
console.log(output3)
const output4 = data2.data[1].bookCategory;
console.log(output4)

// task 1
const odds = [3, 5, 7, 9, 11];
const even = [];
for (let odd of odds) {
    odd += 1
    even.push(odd);
}
console.log(even)
const even1 = odds.map(odd => odd += 1);
console.log(even1);

// task-2
const anyArray = [33, 50, 79, 78, 90, 101, 30];
const tenDivisibleBy = anyArray.filter(num => num % 10 == 0);
console.log(tenDivisibleBy);
const tenDivisibleBy1 = anyArray.find(num => num % 10 == 0);
console.log(tenDivisibleBy1);

// task-3
const instructors = [
    { name: 'Lisa', age: 26, position: 'Senior' },
    { name: 'Humayra', age: 28, position: 'Junior' },
    { name: 'Tamrin', age: 22, position: 'Senior' }
]
const SeniorTeacher = instructors.filter(instructor => (instructor.position == 'Senior'));
console.log(SeniorTeacher);
const result = Object.keys(SeniorTeacher[0]);
console.log(result)
const result1 = Object.values(SeniorTeacher[0]);
console.log(result1)
const result2 = Object.entries(SeniorTeacher[0]);
console.log(result2)

// task-4
sum = 0;
for (let instructor of instructors) {
    sum = sum + instructor.age;
}
console.log(sum);
// another way
const sum1 = instructors.map(instructor => instructor.age);
console.log(sum1);
const totalSum = sum1.reduce((x, y) => x + y, 0);
console.log(totalSum);