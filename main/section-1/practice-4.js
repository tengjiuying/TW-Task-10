'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}*/

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach((item) => {
        if(objectB.value.includes(item.key)){
            result.push(item,key);
    }
    })
    return result;
}
