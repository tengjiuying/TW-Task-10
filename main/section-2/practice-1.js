'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}*/

module.exports = function countSameElements(collection) {
    var num;
    return collection.reduce( (result , item)=>{
        let num = result.findIndex( (obj)=>{
            return obj.key === item;
    })

    if (num === -1) {
        result.push({key: item, count: 1})
    } else {
        result[num].count += 1;
    }

    return result;

    } , []);
}
