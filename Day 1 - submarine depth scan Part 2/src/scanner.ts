import { data } from './data'


class SlidingWindow {
    a: number 
    b: number
    c: number

    constructor(a:number, b:number, c:number) {
        this.a = a
        this.b = b
        this.c = c
    }

    pushAndReturn(newData: number):SlidingWindow {
        return new SlidingWindow(this.b, this.c, newData)
    }

    getSum(): number {
        return this.a + this.b + this.c
    }
}

var lastSlidingWindow: SlidingWindow
var currentSlidingWindow: SlidingWindow


var count: number = 0

var lastThreeDataPoints: Array<number> = []

data.forEach(currentDataPoint => {

    if (lastThreeDataPoints.length !== 3) {
        lastThreeDataPoints.push(currentDataPoint)
        return
    } else if (lastSlidingWindow === undefined) {
        lastSlidingWindow = new SlidingWindow(
            lastThreeDataPoints[0], 
            lastThreeDataPoints[1], 
            lastThreeDataPoints[2]
        )
    }

    currentSlidingWindow = lastSlidingWindow.pushAndReturn(currentDataPoint)

    if (currentSlidingWindow.getSum() > lastSlidingWindow.getSum()) {
        count++
    }
    
    lastSlidingWindow = currentSlidingWindow
    
});

console.log(count)
