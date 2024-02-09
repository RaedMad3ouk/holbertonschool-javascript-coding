#!/usr/bin/node
const request = require('request');

const url = process.arg[2];

request(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('code:', response.statusCode);
  }
});