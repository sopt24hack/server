var express = require('express');
var router = express.Router();

const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');
router.get('/', async (req,res)=> {
    let readData = await fileUtil.loadData('./toDoData.txt');
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.GET_TODO_SUCCESS, readData));
})
//toDo 페이지 구현

router.post('/', (req,res)=> {
    
})


module.exports = router;