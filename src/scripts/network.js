'use strict';

import http from 'http';
import https from 'https';

// const fetch = url => new Promise((resolve, reject) => {
//     const protocol = url.startsWith('https') ? https : http;
//     protocol.get(url, res => {
//         if (res.statusCode !== 200) {
//             const { statusCode, statusMessage } = res;
//             reject(new Error(`Status Code: ${statusCode} ${statusMessage}`));
//         }
//         res.setEncoding('utf8');
//         const buffer = [];
//         res.on('data', chunk => buffer.push(chunk));
//         res.on('end', () => resolve(buffer.join()));
//     });
// });

let request = new XMLHttpRequest();
const reqReadyStateChange = () => {
    if (request.readyState == 4 && request.status == 200)
        document.getElementById("output").innerHTML=request.responseText;
}
var body = "name=" + user.name + "&age="+user.age;
request.open("POST", "http://localhost:3000/banks.js");
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.onreadystatechange = reqReadyStateChange;
request.send(body);

// Usage

export { reqReadyStateChange };