const statusCode = require('./statusCode');
const resMsg = require('./responseMessage');
const authUtil = require('./authUtil');
const fs = require('fs');
const json2csv = require('json2csv');
const csvtojson = require('csvtojson');
const moment = require('moment');
const fileUtil = require('./fileUtil');

const SIMPLE_DATA_FORMAT = 'YYYY-MM-DD hh:mm:ss';

const boardUtil = {
    indexOfUserBoard : (res, data, id, func) => {
        const targetIdx = data.id.indexOf(Number(id));

        if(targetIdx === -1) {
            res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(statusCode.BAD_REQUEST, resMsg.BAD_REQUEST));
        }
        else {
            func(targetIdx);
        }
    },
    getUserBoardAt : (data, idx) => {
        return {
            authority : data.authority[idx],
            name : data.name[idx],
            age : data.age[idx]
        }
    },
    addUserBoard : (res,path, data, body) => {
        const newData = {
            authority : body.authority,
            name : body.name,
            age : body.age
        };

        console.log(newData);

        const resultCsv = fileUtil.jsonToCsv(data);
        fileUtil.writeNewFile(res,path,resMsg.CREATED_USER,resultCsv);
    }

}

module.exports = boardUtil;