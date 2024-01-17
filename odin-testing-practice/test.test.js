function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function reverse(string) {
    return string.split('').reverse().join('');
}

function calculate() {
    return {
        sum (a,b) {
            return a + b;
        },
        subtract (a,b) {
            return a - b;
        },
        multiply (a,b) {
            return a * b;
        },
        divide (a,b) {
            return a / b;
        }
    }
}

// my attempt
// function addKey(word, key) {
//     let wordChar = word.charCodeAt(0);
//     if(wordChar > 64 && wordChar < 91) {
//         if(key > 26) {
//             key = key - 26
//         }
//         wordChar += key;
//     }
//     if(wordChar > 96 && wordChar < 123) {
//         if(key > 26) {
//             key = key - 26
//         }
//         wordChar += key;
//     }

//     return String.fromCharCode(wordChar);
// }

// 
function addKey(word, key) {
    let wordChar = word.charCodeAt(0);

    if ((wordChar >= 65 && wordChar <= 90) || (wordChar >= 97 && wordChar <= 122)) {
        let base = wordChar >= 65 && wordChar <= 90 ? 65 : 97;
        wordChar = ((wordChar - base + key) % 26 + 26) % 26 + base;
    }

    return String.fromCharCode(wordChar);
}


function caesarCipher (string,key) {
    let stringArr = string.split("");
    return stringArr.map(word => addKey(word, key)).join("");
}

function analyzeArray(array) {
    return {
        average : array.reduce((prev,cur) => prev + cur ,0) / array.length,
        min : Math.min(...array),
        max : Math.max(...array),
        length : array.length
    }
}

/////////////////////////////////////
// test

test('capitalize string', () => {
    expect(capitalize('capital')).toBe('Capital');
});

test('reverse string', () => {
    expect(reverse('reverse')).toBe('esrever');
});

test('calculate', () => {
    let cal = calculate();
    expect(cal.sum(1,1)).toBe(2);
    expect(cal.subtract(1,1)).toBe(0);
    expect(cal.multiply(2,2)).toBe(4);
    expect(cal.divide(2,2)).toBe(1);
});

test('caesarCipher', () => {
    expect(caesarCipher('HELLOhello', 3)).toBe('KHOORkhoor');
    expect(caesarCipher('waiyanminhtet', 3)).toBe('zdlbdqplqkwhw');
    expect(caesarCipher('waiyanminhtet', 5)).toBe('bfndfsrnsmyjy');
});

test('analyseArr', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({average: 3, min: 1, max: 5, length: 5});
})