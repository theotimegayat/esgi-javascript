function type_check_v1(arg1, arg2) {
    if (!arg1 || !arg2) return;

    if (arg2 === "null") {
        return arg1 === null ? true : false;
    }

    if (arg2 === "object") {
        if (arg1 === null) {
            return false;
        }
        if (Array.isArray(arg1)) {
            return false;
        }
    }

    if (arg2 === "array") {
        return Array.isArray(arg1) ? true : false;
    }

    return typeof arg1 === arg2;
}

function type_check_v2(arg1, object) {

    if (type_check_v1(arg1, "object")) {
        if(object.hasOwnProperty('type') && object.type === 'object') {
            return true;
        }
    }

    if(type_check_v1(arg1, "string")) {
        if(object.hasOwnProperty('type') && object.type === "string") {
            if(object.hasOwnProperty('value') && object.value === arg1) {
                return true;
            }
        }
    }

    if(type_check_v1(arg1, "number")) {
        if(object.hasOwnProperty('enum') && object.enum.includes(arg1)){
            return true
        }
    }

    return false;
}

//console.log(type_check_v2({ prop1: 1 }, { type: "object" }));
console.log(type_check_v2("foo", {type: "string", value: "foo"}));
//console.log(type_check_v2("bar", {type: "string", value: "foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}))