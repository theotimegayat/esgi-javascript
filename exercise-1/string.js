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
    return str.toLowerCase().split(" ").join("_");
}

//console.log(snake_case("Je Fais_Des TeSts"));

function leet(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return str.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g,"1").replace(/o/g,"0").replace(/u/g,"(_)").replace(/y/g,"7");
}

//console.log(leet("anaconda"));

function verlan(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    for (var i = str.length - 1; i >= 0; i--) {
        str += str[i];
    }
    return str;
}

console.log(verlan("Hello"));