function sayHi (name){
    return `Hi ${name}`;
}

console.log(sayHi("Khristian"));
console.log(sayHi("Tommy"));

function bigString(string1, string2){
    if(string1.length > string2.length){
        return string1;
    }else if (string2.length > string1.length){
        return string2;
    }else {
        return `${string1} and ${string2} are equal in length`;
    }
}

console.log(bigString("Dog", "Cats"));
console.log(bigString("Dogs", "Cat"));
console.log(bigString("Dog", "Cat"));

function bigNumber(num1, num2){
    if(num1 > num2 ){
        return num1;
    }else if (num2 > num1 ){
        return num2;
    }else {
        return `${num1} and ${num2} are equal.`;
    }
}

console.log(bigNumber(5,6));
console.log(bigNumber(7,6));
console.log(bigNumber(6,6));

function fiveMore (myArray){
    for(let i = 0; i< myArray.length; i++){
        if(myArray[i] % 2 === 1){
            myArray[i] = myArray[i] + 5;
        }
    }
    return myArray;
}


let numArray = [2, 3, 5, 7, 10];
fiveMore(numArray);
console.log(numArray);

function arraySummer (myArray){
    let total = 0;
    for(let i = 0; i< myArray.length; i++){
        total += myArray[i];
    }
    return total;
}
let numArray2 = [1, 1, 1, 1, 1];

console.log(arraySummer(numArray2));

function everyDivisible(n){
    if(n <= 10){
        for(let i = 1; i <= 100; i++){
            if(i % n === 0){
                console.log(i);
            }
        }
    }else{
        console.log(`Number must be 10 or lower.`);
    }
}

everyDivisible(7);