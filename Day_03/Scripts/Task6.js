let year = 2100;

let isLeepYear = year%4==0 ? (year%100==0 ? (year%400==0 ? "a Leep Year": "Not a Leep Year"): "a Leep Year") : "Not a Leep Year";

console.log(year, " is ", isLeepYear);