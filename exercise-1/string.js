function ucfirst(str){
    if (typeof str !== "string" || !str) return '';

    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst("test"));
console.log(ucfirst("Test"));
console.log(ucfirst(" test"));
console.log(ucfirst("test Test tst"));
console.log(ucfirst(""));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
    if(typeof str !=="string" || !str) return '';
    return str.toLowerCase().split(" ").map(function(item) {
        return ucfirst(item);
    }).join(" ");
}

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
}

console.log(camelCase("Je Fais Des TeSts"));

function snakeCase(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return str.toLowerCase().split(" ").join("_");
}

console.log(snakeCase("Je Fais Des TeSts"));

function leet(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }

}