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
    return collectionA.filter((item)=>{
        return objectB.value.includes(item);
    })
}
