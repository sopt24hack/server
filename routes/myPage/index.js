var express = require('express');
var router = express.Router();

const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

router.get('/', (req,res)=> {
})
//login 페이지 구현

router.post('/', (req,res)=> {
    let userData = {
        'authority' : req.body.authority,
        'name' : req.body.name,
        'age' : req.body.age,
    };
    let userCsv = fileUtil.jsonToCsv(userData);
    if(userData.authority === 0) { // PARENT 
        fileUtil.writeNewFile(res, './parentData.csv', 'parent data', userCsv);
    }
    else if(userData.authority === 1) { //CHILD
        fileUtil.writeNewFile(res, './childData.csv', 'child data', userCsv);
    }
    else {
        res.status(statusCode.BAD_REQUEST).send(statusCode.BAD_REQUEST, resMsg.NULL_VALUE);
    }
})


module.exports = router;