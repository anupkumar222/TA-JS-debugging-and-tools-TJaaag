function sumOfNum(numA = 0, numB = 0) {
    return numA + numB;
}

let result, expected;

// test 1
function test1(){
    result = sumOfNum(10, 20);
    expected = 30;
    expect(result).toEqual(expected);
//    if(result !== expected) {
//        throw  Error(`${result} is not equal to ${expected}`);
//    }
}
test(`10 + 20`, test1);

// test 2
function test2() {
    result = sumOfNum(30, 20);
    expected = 30;
    expect(result).toEqual(expected);

    // if(result !== expected) {
    //     throw Error(`2nd test ${result} is not equal to ${expected}`);
    // }
}
test(`30 + 20`, test2);

// testing framework
function test(message, callbaack) {
    try {
        callbaack();
        console.log(`correct`, message)
    } catch (error) {
        console.error(error);
        console.log(`wrong`, message)
    }
}

// assertion library
function expect(actual) {
    return {
        toEqual: function(expected) {
            if(actual !== expected) {
                throw Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual: function(expected) {
            if(actual !== expected) {
                throw Error(`${actual} is not equal to ${expected}`)
            }
        }
    };
}

// test 3
test(`add 10 + 20`, () => {
    expect(sumOfNum(10, 20)).toEqual(30);
});

// test 4
test(`add 40 + 20`, () => {
    expect(sumOfNum(40, 20)).toEqual(60);
});

// test 5
test(`add A + 20`, () => {
    expect(sumOfNum(`A`, 20)).toEqual(30);
});


// multiply function
function multiply(numberA, numberB) {
 return numberA * numberB
}

test(`multiply 10 * 20`, () => {
    expect(multiply(10, 20).toBeEqual(200))
})

function test10(){
    result = multiply(10, 20);
    expected = 30;
    expect(result).toEqual(expected);
//    if(result !== expected) {
//        throw  Error(`${result} is not equal to ${expected}`);
//    }
}