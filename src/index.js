const RECORDS_N = 1000;
const records = generateOrders(RECORDS_N);

console.table(records.slice(0, 10));
console.log(COFFEE_BY_ID);

const pre = document.querySelector('#data');

pre.innerText = JSON.stringify(records, null, 2);
