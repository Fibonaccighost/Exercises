/*
Create a business name generator by combining list of adjective and shop name and another word
*/

/*
Adjectives

Crazy
Amazing
Fire


Shop Name

Engine
Foods
Garments



Another Word

Bros
Limited
Hub
*/

let x = Math.floor((Math.random() * 3) + 1);
let y = Math.floor((Math.random() * 3) + 1);
let z = Math.floor((Math.random() * 3) + 1);

console.log(x,y,z)

let adj1 = 'Crazy';
let adj2 = 'Amazing';
let adj3 = 'Fire';
let ShopName1 = 'Engine';
let ShopName2 = 'Foods';
let ShopName3 = 'Garments';
let AnotherWord1 = 'Bros';
let AnotherWord2 = 'Limited';
let AnotherWord3 = 'Hub';


let a, b, c;

if (x == 1) {
    a = adj1;
} else if (x == 2) {
    a = adj2;
}else {
    a = adj3;
}

if (y == 1) {
    b = ShopName1;
} else if (y == 2) {
    b = ShopName2;
}else {
    b = ShopName3;
}

if (z == 1) {
    c = AnotherWord1;
} else if (z == 2) {
    c = AnotherWord2;
}else {
    c = AnotherWord3;
}

console.log(a,b,c)