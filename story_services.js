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

//get a post by id
router.get('/story',function(request,response,_){
    let storyId=request.query.id;
    console.log(storyId);
    let sql= 'SELECT * FROM post WHERE id=?';
    let values=[storyId];
    connection.query(sql,values,(err,result)=>{
        if(err) throw err;
        response.json(result[0]);
        response.end();

    });

});


module.exports = router