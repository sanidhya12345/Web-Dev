//Node js directly not run the code directly but first wraps inside a function.
/**

exports:it refers to module.exports
require:module name or path
module:currently executed module
__filename:file name of current module
__direname:directory name at which our file is stored.

 */
(function(exports, require, module, __filename, __dirname) {
    details={
        name:"sanidhya",
        age:22,
        role:"SDE"
    }

    module.exports=details;
 })