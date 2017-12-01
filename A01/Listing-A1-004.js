// Function declaration

function myFunction(name) {
    return 'Hello ' + name;
}

// 'Hello Steve'
let greeting = myFunction('Steve');

// Function expression

var myFunctionExpression = function (name) {
    return 'Hi ' + name;
};

// 'Hi Steve'
greeting = myFunctionExpression('Steve');