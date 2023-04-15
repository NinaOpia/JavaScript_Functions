 console.log("Hello World!\n==========\n");

// // Exercise 1 Section - PRINT ODDS
// function printOdds(count) {
//     for (let i = 1; i <= count; i++){
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }
// printOdds(10); //1, 3, 5, 7, 9
// printOdds(100); //1, 3, 5-99

// function printOdds(count) {
//     if (count < 0) {
//         for (let i = -1; i >= count; i--) {
//             if (i % 2 != 0) {
//                 console.log(i);
//             }
//         }
//     }   else {
//         for (let i = 1; i <= count; i++){
//          if (i % 2 != 0) {
//             console.log(i);
//             }
//         }
//     }
// }

// printOdds(-10);
// printOdds(10);


// Exercise 2 Section - CHECK AGE
// function checkAge(name, age) {
//     let oldEnoughMsg = `Congrats ${name}! You can drive!`;
//     let tooYoungMsg = `Sorry ${name}, you need to wait ${
//         16 - age
//     } year(s) until you can drive.`;

//     if (age < 16) {
//         console.log(tooYoungMsg);
//     } else {
//         console.log(oldEnoughMsg); 
//     }
// }

// checkAge("Emmanuel", 14)
// checkAge("Joel", 16);
// checkAge("Samuel", 17);


//Exercise 3 Section - WHICH QUADRANT
// function checkQuadrant(x, y) {
//     switch (true) {
//         case x > 0 && y > 0:
//             return "Quadrant 1";
//         case x < 0 && y > 0:
//             return "Quadrant 2";
//             case x > 0 && y < 0:
//                 return "Quadrant 3";
//                 case x > 0 && y < 0:
//                     return "Quadrant 4";
//                     case x == 0 && y != 0:
//                         return "X Axis";
//                         case x != 0 && y == 0:
//                         return "Y Axis";
//                         default:
//                             return "Origin";
//     }
// }

// console.log(checkQuadrant(11, 1));
// console.log(checkQuadrant(-11, 1));
// console.log(checkQuadrant(-1, -11));
// console.log(checkQuadrant(1, -11));
// console.log(checkQuadrant(0, -11));
// console.log(checkQuadrant(11, 0));
// console.log(checkQuadrant(0, 0));


//Exercise 4: TRIANGLES
// function isValidTriangle(a, b, c) {
//     return a + b > c && a + c > b && b + c > a;
// }

// function checkTriangle(a, b, c) {
//     let isValid = isValidTriangle(a, b, c);
//     if (isValid) {
//         //What type of triangle?
//         if (a == b && b == c) {
//             return `Equilateral`;
//         } else if (a == b || b == c || a == c) {
//             return `Isosceles`;
//         } else {
//             return `Scalene`;
//         }
//     } else {
//         return `Not a valid triangle.`;
//     }
// }

// console.log(checkTriangle(2, 3, 4)); //Scalene
// console.log(checkTriangle(2, 2, 2)); //Equilateral
// console.log(checkTriangle(1, 2, 2)); //Iosceles
// console.log(checkTriangle(1, 1, 2)); //Invalid


//Exercise 5: DATA
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currenttAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currenttAvg;
    let statusMsg;

    if (currenttAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currenttAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projectedAvg.toFixed(2)} GB/day. 
    You are ${statusMsg} your average daily use (${currenttAvg.toFixed(2)} GB/day), 
    continuing this usage, you will end up using ${
        planLimit - (usage + projectedUsage)
    } GB from your data limit. 
    To stay below your data plan, use no more than ${(
        remainingData / remainingDays
    ).toFixed(2)} GB/day.`);
}

dataUsageFeedback(50, 10, 25);