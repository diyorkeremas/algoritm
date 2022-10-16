let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
let c = +prompt("c sonini kiriting");
if (a > b && a > c && b > c) {
    console.log(c);
}
else if (a > b && a > c && b < c) {
    console.log(b);
}
else if (b > a && b > c && a > c) {
    console.log(c);
}
else if (b > a && b > c && a < c) {
    console.log(a);
}
else if (c > a && c > b && a > b) {
    console.log(b);
}
else if (c > a && c > b && a < b) {
    console.log(a);
}
else {
    console.log("sonlar kiriting");
}

// if 3

let a2 = +prompt("a sonini kiriting");
let b2 = +prompt("b sonini kiriting");
if (a2 > b2) {
    console.log(a2);
}
else if (a2 < b2) {
    console.log(b2);
}
else if (a2 = b2) {
    console.log(0);
}
else {
    console.log("a va b ga sonlar kiriting");
}

// if 13 

let a3 = +prompt("Pulingizni kiriting");
let b3 = prompt("Tanaffusda bo'lsangiz Ture qiymatini kiriting");
if (a3 >= 20 && b3 == "Ture" ) {
    console.log("True");
}
else {
    console.log("false");
}