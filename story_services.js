var router = require('express').Router();
var config = require('./db/db_config');
var connection = config.connection;


//get all stories
router.get('/storyList', function (_, response, _) {

    let sql = 'SELECT * FROM post';
    connection.query(sql,(err, result) => {
        if (err) throw err;

        response.json(result);
        response.end();
    });
});


module.exports = router