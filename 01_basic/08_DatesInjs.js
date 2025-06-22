// dates 

let mydate = new Date();
// console.log(mydate.toString());               // output : Fri Jun 13 2025 16:59:16 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());           // output : Fri Jun 13 2025
// console.log(mydate.toISOString());            // output : 2025-06-13T17:03:35.666Z
// console.log(mydate.toJSON());                 // output :  2025-06-13T17:03:57.270Z
// console.log(mydate.toLocaleDateString());     // output : 6/13/2025
// console.log(mydate.toLocaleTimeString());     // output : 5:04:48 PM
// console.log(mydate.toLocaleString());         // output : 6/13/2025, 5:05:13 PM
// console.log(myDate.toUTCString());            //output : Wed, 08 Jan 2025 11:56:14 GMT

console.log(typeof mydate);    // output : object

let myNewDate = new Date(2023, 0, 23)         // output : 2023-01-22T18:30:00.000Z
//let myNewDate = new Date(2023, 0, 23, 5, 3) // output : 2023-01-22T23:33:00.000Z
//let myNewDate = new Date("2023-01-14")      // output : 2023-01-14T00:00:00.000Z
//let myNewDate = new Date("01-14-2023")      // output : 2023-01-13T18:30:00.000Z
//console.log(myNewDate)

// convert the tolocalestring() or any converting function for better results / view
// foe ex . console.log(myNewDate.toLocaleString())  // output : 1/14/2023, 12:00:00 AM


let myCreatedDate = new Date(2023,0,23)
let myTimeStamp = Date.now()

//console.log(myTimeStamp);                 // output : 1736339234366
//console.log(myCreatedDate.getTime());     // outptu : 1674412200000
//console.log(Math.floor(Date.now()/1000));  // outptu : 1736339322



let newDate = new Date()
console.log(newDate);                // outptu : 2025-01-08T12:30:36.808Z
console.log(newDate.getMonth() + 1); // output : 1
console.log(newDate.getDay());       // output : 3

// getDate(),getFullYear(),gethours(),getmillisecond(),getMinutes(),getSecond(),getTime(),
// getTimeZone(),getUTCDate(),getUTCDay(),getUTCFullYear(),getUTCHours(),getUTCmillisecond(),
// getUTCMinutes(),getUTCMonth(),getUTCSeconds(),getVarDate()

 

 





