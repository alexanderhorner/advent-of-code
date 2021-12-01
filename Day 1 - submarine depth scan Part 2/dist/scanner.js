"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var count = 0;
for (let i = 3; i < data_1.data.length; i++) {
    if (data_1.data[i] > data_1.data[i - 3]) {
        count++;
    }
}
console.log(count);
//# sourceMappingURL=scanner.js.map