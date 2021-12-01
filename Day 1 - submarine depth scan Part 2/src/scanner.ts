import { data } from './data'

var count: number = 0

for (let i = 3; i < data.length; i++) {
    if (data[i] > data[i-3]) {
        count++
    }
}

console.log(count)
