"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var lastDataPoint;
var count = 0;
data_1.data.forEach(currentDataPoint => {
    if (lastDataPoint === undefined) {
        lastDataPoint = currentDataPoint;
        return;
    }
    if (currentDataPoint > lastDataPoint) {
        count++;
    }
    lastDataPoint = currentDataPoint;
});
console.log(count);
//# sourceMappingURL=scanner.js.map