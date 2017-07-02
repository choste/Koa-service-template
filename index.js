'use strict'

const Koa = require('koa');
const app = new Koa();
const helloApi = require('./api/hello')

app.use(helloApi);

app.listen(3000);
