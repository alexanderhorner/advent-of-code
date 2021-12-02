"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var horizontalPos = 0;
var depth = 0;
var aim = 0;
for (let i = 0; i < data_1.data.length; i++) {
    var x = data_1.data[i][1];
    switch (data_1.data[i][0]) {
        case "forward":
            horizontalPos += x;
            depth += aim * x;
            break;
        case "up":
            aim -= x;
            break;
        case "down":
            aim += x;
    }
}
console.log(horizontalPos * depth);
//# sourceMappingURL=converter.js.map