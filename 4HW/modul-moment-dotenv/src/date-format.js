import moment from "moment";

const now = moment();

console.log(now.format());

console.log(moment().format("DD.MM.YYYY"));
console.log(moment().format("DD-MM-YYYY"));
console.log(moment().format("MMM Do YY"));
console.log(moment().format("dddd"));