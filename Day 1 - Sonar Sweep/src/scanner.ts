import { data } from './data'

var lastDataPoint: undefined | number 
var count: number = 0


data.forEach(currentDataPoint => {

    if (lastDataPoint === undefined) {
        lastDataPoint = currentDataPoint
        return
    }

    if (currentDataPoint > lastDataPoint) {
        count++
    }

    lastDataPoint = currentDataPoint
});

console.log(count)
