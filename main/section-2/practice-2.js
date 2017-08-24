'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
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
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }
    return result;
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
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
    if(str.length === 1)
        return 1;
    else
        return parseInt(str.match(/[0-9]+/));
}

module.exports = function countSameElements(collection) {
    var num;
    return collection.reduce( (result , item)=>{
        let num = result.findIndex( (obj)=>{
            return obj.key === item[0];
})

    if( num === -1 )
        result.push({key:item[0] , count:getNum(item)});
    else
        result[num].count += 1;

    return result;

} , []);
}
