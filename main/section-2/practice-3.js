'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.name === ch) {
            return item;
        }
    }

    return null;
}

function summarize(collection) {
    let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.summary++;
        } else {
            result.push({name: item, summary: 1});
        }
    }
    return result;
}

function split(item) {
    if (item.includes("-")) {
        let array = item.split("-");
        return {key: array[0], count: parseInt(array[1], 10)};
    }

    if (item.includes("[")) {
        let key = item.charAt(0);
        let count = parseInt(item.substr(2, item.length - 1));
        return {key, count};
    }

    if (item.includes(":")) {
        let array = item.split(":");
        return {key: array[0], count: parseInt(array[1], 10)};
    }
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
        }
    }
    return result;
}*/

function getNum(str) {
    if (str.length !== 1) {
        return parseInt(str.match(/[0-9]+/));
    } else return 1;
}

module.exports = function countSameElements(collection) {
    var num;
    return collection.reduce( (result , item)=>{
        let num = result.findIndex( (obj)=>{
            return obj.name === item[0];
})

    if (num !== -1) {
        result[num].summary += getNum(item);
    } else result.push({name: item[0], summary: getNum(item)});

    return result;

} , []);
}
