
for (let n = 1; n <= 100; n++) {
    if (Math.sqrt(n) % 1 === 0) { // Check if n is a perfect square
        break; // Stop the loop when the first square number is found
    }
    console.log(n);
}


