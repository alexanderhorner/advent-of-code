"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var count = 0;
for (let i = 3; i < data_1.data.length; i++) {
    // We can simplyify following approach by ignoring data[i-2] and data[i-1], since they get added on both:
    // var currentWindow = data[i] + data [i-1] + data[i-2]
    // var previousWindow = data[i-1] + data[i-2] +data[i-3]
    var currentWindow = data_1.data[i];
    var previousWindow = data_1.data[i - 3];
    if (currentWindow > previousWindow) {
        count++;
    }
}
console.log(count);
// 1457
//# sourceMappingURL=scanner.js.map