// Bool 11
let number = +prompt("a butun sonini kiriting");
let number2 = +prompt("b butun sonini kiriting");
if (number % 2 || number2 % 2 ) {
    console.log("True");
}
else {
    console.log("False");
}

// bool 13
let as = +prompt(" a sonini kiriting");
if (as >= 100 && as < 1000) {
    console.log("true");
}
else if (as < 0) {
    console.log ("musbat son kiriting");
}
else {
    console.log("false");
}

// bool 14
let d = +prompt('soni kiriting') 
if(a < 0) {
    console.log('musbat kiritey');
}
else if (a % 10 == (a - a % 10) / 10) {
        console.log('true');
    }
    
    else if (a >= 100 ) {
        console.log ("ikki xonali butun son kiriting");
    }
    else {
        console.log("false");
    }

// Bool 15
let g = +prompt('nmadr kirit')
if(a < 0) {
    console.log('musbat kiritey');
}
else if (a >= 100 || a < 10) {
        console.log ("ikki xonali butun son kiriting");
    }
    else if (((a - a % 10) / 10 + a % 10) % 2 == 0 ) {
        console.log("true")
    }
    else {
        console.log("false");
    }
    
    // bool 17 
let a = +prompt("a uch xonali butun sonini kiriting");
let b = (a - a % 100)/100
let c = (a % 100 - a % 10) / 10 
if (a < 0) {
    console.log ("musbat son kiriting");
}
else if (((a - a % 100) / 100 + (a % 100 - a % 10) / 10 + a % 10) % 2 == 1) {
    console.log("true");
}
else {
    console.log("false");
}