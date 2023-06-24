
const os = require('os');

const osInfo = {
    type: os.type(),
    uptime: os.uptime(),
    freeMemory: os.freemem(),
}

module.exports = osInfo;