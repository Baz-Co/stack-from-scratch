// @flow

/* eslint-disable no-console */
import Dog from './dog'
// const Dog = require('./dog')

const ver = 'ES6 transplied using Babel'
console.log(`Hello. You are using ${ver}`)

const toby = new Dog('Toby')

console.log(toby.bark())
