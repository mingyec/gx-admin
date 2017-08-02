const mysql = require('mysql');
const express = require('express');
const router = express.Router();

//mysql连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'gx_cloud_dev'
});

connection.connect();

router.get('/api/login', function(req, res, next) {
    console.info(req.query);
    connection.query('SELECT ci.customer_Id, ci.company_name company,su.user_name username,su.user_desc user FROM sys_users su,tb_customer_info ci WHERE su.customer_id = ci.customer_Id', function(err, result, fields) {
        if (err) {
            console.error(err);
        } else {
            //查询过滤选项
            connection.query('SELECT DISTINCT ci.customer_Id value, ci.company_name label FROM sys_users su,tb_customer_info ci WHERE su.customer_id = ci.customer_Id', function(error, value) {
                if (error) {
                    console.error(error);
                } else {
                    res.send({
                        tableData: result,
                        filterModel: value
                    });
                }
            });
        }
    });
    // res.send('yes!');
});

router.get('/api/companyList', function(req, res, next) {
    connection.query('SELECT DISTINCT ci.customer_Id companyID, ci.company_name companyName FROM sys_users su,tb_customer_info ci WHERE su.customer_id = ci.customer_Id', function(error, value) {
        if (error) {
            console.error(error);
        } else {
            res.send({
                data: value
            });
        }
    });
})

module.exports = router;