const md5 = require('md5');

const hash = (password) => md5(password);

module.exports = hash;
