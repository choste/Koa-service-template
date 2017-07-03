[![Build Status](https://travis-ci.org/choste/Koa-service-template.svg?branch=master)](https://travis-ci.org/choste/Koa-service-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# Koa 2 - template

## Description

This project is a simple hello world app, built in node with [koa](http://koajs.com/).

## Setup

this project async and requires node 7.6 or greater.
[nodejs](https://nodejs.org)

```
npm i
```

## Run

### Local server

```
npm start
```

this starts a local server hosted at [localhost:3000](http://localhost:3000/).

### Test
```
npm test
```

This first runs a set of endpoint test using [mocha](https://mochajs.org/) and [supertest](https://github.com/visionmedia/supertest). Then, as a post test step, the code style is check using [eslint](http://eslint.org/).
