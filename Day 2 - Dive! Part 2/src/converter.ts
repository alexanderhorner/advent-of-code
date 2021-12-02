import { data } from './data'

var horizontalPos: number = 0;
var depth: number = 0;
var aim: number = 0;


for (let i = 0; i < data.length; i++) {

    var x = data[i][1]

    switch (data[i][0]) {

        case "forward":
            horizontalPos += x
            depth += aim * x
            break
        
        case "up":
            aim -= x
            break

        case "down":
            aim += x
    }
}

console.log(horizontalPos * depth)
