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

function countSameItem(collectionA) {
    var num;
    return collectionA.reduce( (result , item)=>{
        let num = result.findIndex( (obj)=>{
            return obj.key === item;
})

    if (num !== -1) {
        result[num].count += 1;
    } else result.push({key: item, count: 1});
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
