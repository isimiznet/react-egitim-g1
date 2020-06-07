import React from "react"

function LetVarConst() {
    /*
    var myvar = "Hello World";
    let myothervar = "Hello";

    const PI = 3.14;


    PI = 3.14; // error

    let myothervar = "Hello"; // error
    var myvar = 2;
     */
}

function ArrowFunctions() {

    function myFunction(message) {
        console.log(message)
    }

    const myArrowFunc = (message) => {
        console.log(message);
        return message
    };

    const sum = (sayi1, sayi2) => sayi1 + sayi2;

    sum(1, 2); // 3
}

function TemplateLiterals() {

    let today = "" +
        "Günün Tarihi: " + new Date() + " ";

    let bugun = `
        Günün Tarihi ${new Date()} 
        ${1 + 2}
    `;
}

function ObjectPropertyMethodShorthands() {

    let firstName = "Ali";
    let lastName = "Can";

    let user = {
        firstName: firstName,
        lastName: lastName,
        getFullName: function (title) {
            return title + firstName + lastName;
        }
    };

    let user2 = {
        firstName,
        lastName,
        getFullName(title) {
            return title + firstName + lastName;
        },
        getTitle: (title) => `My Title: ${title}`
    }
}

// ...

function SpreadSyntax1() {
    let numbers1 = [1, 2, 3];
    let numbers2 = [4, 5, 6];

    let numbers3 = [...numbers1, ...numbers2, 8, 9];
    // [1,2,3,4,5,6,7,8,9]

    for (let i = 0; i < numbers1.length; i++) {
        numbers3.push(numbers1[i]);
    }

    let person = {
        firstName: "Ali",
        lastName: "Can",
    };

    let address = {
        city: "İstanbul",
        town: "Kadıköy"
    };

    let user = {
        ...person,
        ...address,
        password: "123123"
    }
    /*
    {
        firstName:"Ali",
        lastName: "Can",
        city: "İstanbul",
        town: "Kadıköy",
        password: "123123"
    }

     */
}

function DestructuringAssignment_SpreadSyntax2() {

    let numbers = [1, 2, 3, 4, 5, 6];

    let [firstNumber, secondNumber, ...rest] = numbers;

    console.log(firstNumber); // 1
    console.log(secondNumber); // 2
    console.log(rest); // [3, 4, 5, 6]


    let user = {
        firstName: "Ali",
        lastName: "Can",
        city: "İstanbul",
        town: "Kadıköy"
    };

    let {firstName, lastName, ...userDetails} = user;

    console.log(firstName); // Ali
    console.log(lastName); // Can

    console.log(user.firstName); // Ali
    console.log(user.lastName); // Can

    console.log(userDetails) // {city:"İstanubl", town:"Kadıköy"}
}

function Arrays() {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    console.log(numbers.map(num => num * 2)); // [2,3,6,8..
    console.log(numbers.map(num => <div>{num}</div>)); // [2,3,6,8..

    console.log(
        numbers.filter(num => num % 2 === 0) //  [2,4,6,8,0]
    );

    console.log(
        numbers.reduce((num, total) => num + total, 0) // toplam
    );
}

export default Ecma;
