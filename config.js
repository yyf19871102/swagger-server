/**
 * @author yangyufei
 * @date 2018-12-28 17:31:48
 * @desc
 */
let conf = {
    PORT    : 9101,
    HOST    : '127.0.0.1',
    PATH    : '/api'
};

if (process.env.NODE_ENV === 'production') {
    conf.HOST = '47.104.67.236';
}

module.exports = conf;