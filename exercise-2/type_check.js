function type_check_v1(arg1, arg2) {
    if(arg2 === "null") {
        return arg1 === null ? true : false;
    }

    if(arg2 === "object") {
        return arg1 === null ? false : true;
    }

    if(arg2 === "array") {
        return Array.isArray(arg1) ? true : false
    }

    return typeof arg1 === arg2
}

console.log(type_check_v1([], "array"))