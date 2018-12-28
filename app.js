/**
 * @author yangyufei
 * @date 2018-12-28 17:31:30
 * @desc
 */
const express       = require('express');
const ejs           = require('ejs');
const path          = require('path');
const _             = require('lodash');
const fs            = require('fs');

const SysConf   = require('./config');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use('/static', express.static('public'));
app.use(SysConf.PATH, express.static('app'));

app.use(SysConf.PATH, (req, res, next) => {
    try {
        let {appFileName} = req.query;

        if (!appFileName || !fs.existsSync(path.join(__dirname, 'app', `${appFileName}.json`))) {
            next();
        } else {
            res.render('index', _.merge({}, SysConf, {appFileName}));
        }
    } catch (err) {
        next();
    }
});

app.use('/', (req, res) => {
    res.send('Bad request!');
});

app.listen(SysConf.PORT, function () {
    console.info('Swagger-server listening on port', SysConf.PORT);
});