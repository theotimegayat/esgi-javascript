function type_check_v1(value, type) {
    switch(typeof value){
        case 'object':
            if(Array.isArray(value)) return type == "array";
            if(value === null) return type == "null";
        default:
            return typeof value === type;
    }
}

function type_check_v2(value, conf) {
    for(key in conf){
        switch(key){
            case 'type':
                if(!type_check_v1(value, conf[key])) return false;
            case 'value':
                //... return false;
            case 'enum':
                //... return false;
        }
    }
}

function type_check_v2(value, check) {
    let valid = true;
    if (typeof check !== "object")
        return false;
    if (check.type != null && typeof value !== check.type)
        valid = false;
    if (check.value != null && value !== check.value)
        valid = false;
    if (check.enum != null && value !== check.enum.length)
        valid = false;
    return valid;
}

//console.log(type_check_v2({ prop1: 1 }, { type: "object" }));
console.log(type_check_v2("foo", {type: "string", value: "foo"}));
//console.log(type_check_v2("bar", {type: "string", value: "foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}))