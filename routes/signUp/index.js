var express = require('express');
var router = express.Router();

const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');
const parentDataPath = './parentData.txt';
const childDataPath = './childData.txt';
const fs = require('fs');
router.get('/', (req, res) => {
    res.send('signup');
})
//signUp 페이지 구현

router.post('/', async (req, res) => {
    const body = req.body;
    if (body.authority === '0') {
            let readData = await fileUtil.loadData(parentDataPath);
            readData[readData.length] = body;
            await fileUtil.writeNewFile(parentDataPath, JSON.stringify(readData));
            res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.CREATED_USER,'data added'));
    }
    else if (body.authority === '1') {
        let readData = await fileUtil.loadData(childDataPath);
        readData[readData.length] = body;
        await fileUtil.writeNewFile(childDataPath, JSON.stringify(readData));
        res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.CREATED_USER,'data added'));
    }
    else {
        console.log('err');
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(statusCode.BAD_REQUEST,resMsg.BAD_REQUEST));
    }
})


module.exports = router;