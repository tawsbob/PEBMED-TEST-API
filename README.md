#Dellean PEBMED-TEST-API

Built with 
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
  

## Description

[Nest](https://github.com/nestjs/nest) framework API

## Requirements

Nodejs v12 + | Docker | Docker Compose

## Before Installation
Create your .env file
```bash
 $ touch .env
```
and write in the file database configs

```bash
APP_PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=123456
DB_DATABASE=postgres
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ docker-compose up
```
```bash
$ npm start
```