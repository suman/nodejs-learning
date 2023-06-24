const greeting = require('./2-module-export.js');
const osInfo = require('./3-about-os.js');
greeting.sayHello('raj kumar');
greeting.sayCityName("mukesh",  "mumbai");
console.log(`OS information: os type: ${osInfo.type}, free-memory:${osInfo.freeMemory} upTime:${osInfo.uptime}`);
