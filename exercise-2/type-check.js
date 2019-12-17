function type_check_v1(value, type) {
    switch(typeof value){
        case 'object':
            if(Array.isArray(value)) return type == "array";
            if(value === null) return type == "null";
        default:
            return typeof value === type;
    }
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