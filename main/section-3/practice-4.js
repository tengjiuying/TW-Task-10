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
}

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

function discount(collection, promotionItems) {
    let result = [];
    for (let item of collection) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;
}*/

function getNum(str) {
    if(str.length === 1)
        return 1;
    else
        return parseInt(str.match(/[0-9]+/));
}

function countSameItem(collectionA) {
    var site;
    return collectionA.reduce( (result , item)=>{
        let site = result.findIndex( (obj)=>{
            return obj.key === item[0];
        })
    if (site !== -1) {
        result[site].count += 1;
    } else result.push({key: item[0], count: getNum(item)});
    return result;
} , [])
}

function findSameItem(countSameCollection , objectB) {
    return countSameCollection.reduce( (result , item)=>{
        if(objectB.value.includes(item.key))
             item.count -= Math.floor(item.count / 3);
        result.push(item);
        return result;
} , [])
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let countSameCollection = countSameItem(collectionA);
    return findSameItem(countSameCollection , objectB);
}

