import { data } from './data'


var count: number = 0

for (let i = 3; i < data.length; i++) {

    // We can simplyify following approach by ignoring data[i-2] and data[i-1], since they get added on both:
    // var currentWindow = data[i] + data [i-1] + data[i-2]
    // var previousWindow = data[i-1] + data[i-2] +data[i-3]

    var currentWindow = data[i]
    var previousWindow = data[i-3]

    if (currentWindow > previousWindow) {
        count++
    }
}

console.log(count)

// 1457