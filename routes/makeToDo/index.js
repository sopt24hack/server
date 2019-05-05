var express = require('express');
var router = express.Router();

const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

router.get('/', async (req, res) => {
    
})
//약속 정하기 페이지 구현

router.post('/', async (req, res) => {
    let body = req.body;
    let readData = await fileUtil.loadData('./toDoData.txt');
    readData[readData.length] = body;
    await fileUtil.writeNewFile('./toDoData.txt', JSON.stringify(readData));
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK, resMsg.ADD_TODO_SUCCESS, 'data added'));
});


module.exports = router;