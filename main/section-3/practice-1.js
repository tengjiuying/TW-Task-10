'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}*/

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.reduce( (result , item)=>{
        if(objectB.value.includes(item.key))
             item.count --;
        result.push(item);
        return result;
} , [])

}
