"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var horizontalPos = 0;
var depth = 0;
for (let i = 0; i < data_1.data.length; i++) {
    switch (data_1.data[i][0]) {
        case "forward":
            horizontalPos += data_1.data[i][1];
            break;
        case "up":
            depth -= data_1.data[i][1];
            break;
        case "down":
            depth += data_1.data[i][1];
    }
}
console.log(horizontalPos * depth);
//# sourceMappingURL=converter.js.map