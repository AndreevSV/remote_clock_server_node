import http from 'http';
import { date } from './date.js';
import { exec } from 'node:child_process';

const URL_FRONTEND = 'https://andreevsv.github.io/';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', `${URL_FRONTEND}`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'text/plain');
    res.end(date);
    // sendDateToFrontend(date);
});

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

// function sendDateToFrontend(dateStr) {
//     const curl = `curl -X POST ${URL_FRONTEND}
//         -H "Content-Type: 'text/plain"
//         -d ${dateStr}`;

//     exec(curl, (error, stdout, stderr) => {
//             if (error) {
//                 console.error(error.message);
//                 return;
//             }
//             if (stdout) console.log(`Response from frontend: ${stdout}`);
//             if (stderr) console.error(`stderr: ${stderr}`);
//         }
//     );
// }
