require('dotenv/config');
const server = require('./server');
const { port } = require('./configs/server');

server.listen(port, () => console.log(`server running: http://localhost:${port}`));
