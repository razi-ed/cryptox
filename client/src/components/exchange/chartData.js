//const fetch= require('node-fetch');
const cc = require('cryptocompare');
const moment = require('moment');
// Basic Usage:

const d = new Date();
const year = d.getYear();
const month = d.getMonth();
const date = d.getDate();
const hours = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const ms = d.getMilliseconds();
 
let weekHistoryBTC=[];
const previous =(day)=>new Date(new Date(year, month, date, hours, minutes, seconds, ms ) - 30*day*(1000*60*60*24))

console.log(moment().format('MMMM'));

console.log('date',new Date(year,date,month));
cc.priceHistorical('BTC',[ 'USD'], new Date('2018-1-01'))
.then(r=>console.log(r))
.catch(e=>console.log('error',e))
export default Promise.all(weekHistoryBTC)
.then(r=>console.log(r))
.catch(e=>console.log(e))