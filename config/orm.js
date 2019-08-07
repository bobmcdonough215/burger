var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table 
    }
}


module.exports = orm;