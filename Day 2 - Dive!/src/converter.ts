import { data } from './data'

var horizontalPos: number = 0;
var depth: number = 0;

for (let i = 0; i < data.length; i++) {

    switch (data[i][0]) {

        case "forward":
            horizontalPos += data[i][1]
            break
        
        case "up":
            depth -= data[i][1]
            break

        case "down":
            depth += data[i][1]
    }
}

console.log(horizontalPos * depth)
