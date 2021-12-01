"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
class SlidingWindow {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    pushAndReturn(newData) {
        return new SlidingWindow(this.b, this.c, newData);
    }
    getSum() {
        return this.a + this.b + this.c;
    }
}
var lastSlidingWindow;
var currentSlidingWindow;
var count = 0;
var lastThreeDataPoints = [];
data_1.data.forEach(currentDataPoint => {
    if (lastThreeDataPoints.length !== 3) {
        lastThreeDataPoints.push(currentDataPoint);
        return;
    }
    else if (lastSlidingWindow === undefined) {
        lastSlidingWindow = new SlidingWindow(lastThreeDataPoints[0], lastThreeDataPoints[1], lastThreeDataPoints[2]);
    }
    currentSlidingWindow = lastSlidingWindow.pushAndReturn(currentDataPoint);
    if (currentSlidingWindow.getSum() > lastSlidingWindow.getSum()) {
        count++;
    }
    lastSlidingWindow = currentSlidingWindow;
});
console.log(count);
//# sourceMappingURL=scanner.js.map