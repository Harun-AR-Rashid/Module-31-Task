const products = [
    { id: 1, name: 'harun', group: 'science', reg: '1117619867' },
    { id: 2, name: 'halima', group: 'arts', reg: '1117619868' },
    { id: 3, name: 'humayra', group: 'commerce', reg: '1117619869' },
    { id: 4, name: 'lisa', group: 'science', reg: '1117619870' }
];

// similar

class Persons {
    country = 'Bangladesh';
    speak(talk) {
        console.log(`Talking about ${talk}`);
    }
};
// const halima=new Persons();
// console.log(halima)
// halima.speak('I love you halima')
class Produtives {
    constructor(name, company, price) {
        this.name = name;
        this.company = company;
        this.price = price;
    }
    group() {

    }
}
const product1 = new Produtives('laptop', 'hp', 12499);
const product2 = new Produtives('mobile', 'xiomi', 23999);
const product3 = new Produtives('Phone', 'symphone', 48999);
console.log(product1, product2, product3);