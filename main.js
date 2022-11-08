// let num = 1;

// while (num <= 5) {
//   console.log(num);
//   num++;
// }

// for (let num = 10; num >= 1; num--) {
//   console.log(num);
// }
// console.log("blast off");

// // Coin Flip Simulator
// let numHeads = 0;
// let numTails = 0;

// // Loop 500 times
// for (let n = 1; n <= 500; n++) {
//   // Simulate Coin Flip 50/50 chance
//   if (Math.random() < 0.5) {
//     numHeads++;
//   } else {
//     numTails++;
//   }
// }

// // Output Final Results
// console.log("Heads: " + numHeads + " Tails: " + numTails);

// // Coin Flip Simulator
// let numHeads = 0;
// let numTails = 0;
// let numFlips = 0;

// // Loop until 100 heads
// while (numHeads < 100) {
//   // Simulate Coin Flip 50/50 chance
//   if (Math.random() < 0.5) {
//     numHeads++;
//   } else {
//     numTails++;
//   }
//   // Increment numFlips
//   numFlips++;
// }

// // Output Final Results
// console.log("Number of Coin Flips: " + numFlips);
// console.log("Heads: " + numHeads + " Tails: " + numTails);

// Loop through the rows
for (let y = 2; y <= 6; y += 2) {
  // Print out a row
  for (let x = 2; x <= 8; x += 2) {
    console.log("(" + x + "," + y + ")");
  }
}
