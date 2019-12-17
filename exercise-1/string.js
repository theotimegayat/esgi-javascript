function ucfirst(str){
    if (typeof str !== "string" || !str) return '';

    return str[0].toUpperCase() + str.substring(1);
}
/*
console.log(ucfirst("test"));
console.log(ucfirst("Test"));
console.log(ucfirst(" test"));
console.log(ucfirst("test Test tst"));
console.log(ucfirst(""));
console.log(ucfirst(null));
console.log(ucfirst({}));
*/
function capitalize(str) {
    if(typeof str !=="string" || !str) return '';
    return str.toLowerCase().split(" ").map(function(item) {
        return ucfirst(item);
    }).join(" ");
}
/*
console.log(capitalize("test"));
console.log(capitalize("Test"));
console.log(capitalize(" test"));
console.log(capitalize("test Test tst"));
console.log(capitalize(""));
console.log(capitalize(null));
console.log(capitalize({}));

function camelCase(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return capitalize(str).split(" ").join('');
}*/

function camelCase(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.toLowerCase().split(/[^a-zA-Z0-9]/g).map(function(item){
        return ucfirst(item);
    }).join("");
}

//console.log(camelCase("Je Fais_Des TeSts"));

function snake_case(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
}

//console.log(snake_case("Je Fais_Des TeSts"));

function leet(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    //return str.replace(/a/g, "4").replace(/e/g,
    // "3").replace(/i/g,"1").replace(/o/g,"0").replace(/u/g,"(_)").replace(/y/g,"7");
    return str.replace(/[aeiouy]/gi, function (item) {
        switch(item){
            case 'a':
            case 'A':
                return 4;
            case 'e':
            case 'E':
                return 3;
            case 'i':
            case 'I':
                return 1;
            case 'o':
            case 'O':
                return 0;
            case 'u':
            case 'U':
                return '(_)';
            case 'y':
            case 'Y':
                return 7;
        }
    })
}

//console.log(leet("anaconda"));

function verlan(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return str.split(" ").map(function(word) {
     return word.split('').reverse().join('');
    }).join(" ");
}

//console.log(verlan("Hello world"));

function yoda(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return str.split(' ').reverse().join(' ');
}

//console.log(yoda("Hello world"));

function vig(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return
}

function vig(str, code){
    if(typeof str !== "string" || !str) return '';

    while(code.length < str.length){
        code += code;
    }

    let condeIndex = 0;
    return str.split('').map(function(char,){
        // Position dans l'alphabet du car du message
        const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
        // Verifie car is alpha
        if(charCode < 0 || charCode > 25) return char;
        // Position dans l'alphabet du car du code
        const codeCode = code[condeIndex++].charCodeAt(0) - "a".charCodeAt(0);
        // On applique vigenere
        const cryptedCode = (charCode + codeCode) % 26;
        // On récupère position du car codé dans la table ASCII
        const cryptedChar = cryptedCode + "a".charCodeAt(0);
        // On récupère le code
        return String.fromCharCode(cryptedChar);
    }).join('');
}
console.log(vig("Hello world", "foo"));