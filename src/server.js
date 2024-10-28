const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the log file path within the logs directory
const logFilePath = path.join(__dirname, '../logs', 'access.log');

const server = http.createServer((req, res) => {
    const log = `Request received at ${new Date().toISOString()}\n`;
    fs.appendFileSync(logFilePath, log);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Docker');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
