const statusCode = require('./statusCode');
const resMsg = require('./responseMessage');
const authUtil = require('./authUtil');
const fs = require('fs');
const json2csv = require('json2csv');
const csvtojson = require('csvtojson');
const moment = require('moment');

const SIMPLE_DATA_FORMAT = 'YYYY-MM-DD hh:mm:ss';

const fileUtil = {
    loadData: async (path) => {
        return new Promise((resolve) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    console.log('readFile err : ' + err);
                }
                else {
                    console.log(JSON.parse(data))
                    resolve(JSON.parse(data));
                }
            })
        })
    },
    writeNewFile: (path, array) => {
        return new Promise((resolve) => {
            if(fs.existsSync(path)) {
                fs.writeFile(path, array, (err) => {
                    if (err) {
                        console.log('writeFile err : ' + err);
                    }
                    else {
                        console.log('writeFile success');
                        resolve();
                    }
                })
            }
        })
    },

}
module.exports = fileUtil;