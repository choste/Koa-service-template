[![Build Status](https://travis-ci.org/choste/Koa-service-template.svg?branch=master)](https://travis-ci.org/choste/Koa-service-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# Koa 2 - template

## Description

This project is a simple hello world app, built in node with [koa](http://koajs.com/).

## Setup

This project async and requires node 7.6 or greater.
[nodejs](https://nodejs.org)

```
npm i
```

## Run

### Local server

```
npm start
```

This starts a local server hosted at [localhost:3000](http://localhost:3000/).

### Build

```
npm run build
```

This builds a docker container, copying the index.js, package.json and api folder. Runs a production install.

```
docker run -itp 3000:3000 --rm koa-app
```

This runs the newly created image, opens a tty connection and exposes port 3000 to the host machine. The --rm flag removes the container once the app is stopped.

### Test
```
npm test
```

This first runs a set of endpoint test using [mocha](https://mochajs.org/) and [supertest](https://github.com/visionmedia/supertest). Then, as a post test step, the code style is check using [eslint](http://eslint.org/).
