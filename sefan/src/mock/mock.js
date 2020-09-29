const list1 = require('./list1.json')
const list2 = require('./list2.json')
const list3 = require('./list3.json')
const list = require("./list.json")
module.exports = function() {
    return {
        list,
        list2,
        list1,
        list3
    }
}