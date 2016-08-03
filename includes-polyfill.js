/*
    .includes Polyfill for dated browsers
    
    Author: André Luiz Rabêllo
    Version: 1.0.0
*/

;
if (!String.prototype.includes) {
    String.prototype.includes = function (string) {
        return this.indexOf(string) !== -1;
    };
}
if (!Array.prototype.includes) {
    Array.prototype.includes = function (string) {
        return this.indexOf(string) !== -1;
    };
}
