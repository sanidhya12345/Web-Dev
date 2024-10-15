const os=require("os");
console.log(os.freemem());//how much memory left in our operating system.
console.log(os.homedir());//C:\Users\Hp gives the home directory
console.log(os.hostname());//DESKTOP-FBBS0CS gives the host name

console.log(os.platform());//! returns about the operating system platform
console.log(os.arch());//! returns about operating system CPU architecture.