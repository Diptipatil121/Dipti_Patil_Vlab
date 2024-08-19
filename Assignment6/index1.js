const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateTriangleArea() {
  rl.question('Enter side 1: ', (side1) => {
    rl.question('Enter side 2: ', (side2) => {
      rl.question('Enter side 3: ', (side3) => {
        let s = (parseFloat(side1) + parseFloat(side2) + parseFloat(side3)) / 2;
        let area = Math.sqrt(s * (s - parseFloat(side1)) * (s - parseFloat(side2)) * (s - parseFloat(side3)));
        console.log(`The area of the triangle is: ${area}`);
        rl.close();
      });
    });
  });
}

function calculateCircleArea() {
  rl.question('Enter the radius: ', (radius) => {
    let area = Math.PI * parseFloat(radius) * parseFloat(radius);
    console.log(`The area of the circle is: ${area}`);
    rl.close();
  });
}

function findVowels() {
  rl.question('Enter a string: ', (inputString) => {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        vowelCount++;
      }
    }

    console.log(`The string contains ${vowelCount} vowels.`);
    rl.close();
  });
}

function calculateSimpleInterest() {
  rl.question('Enter the principal amount: ', (principal) => {
    rl.question('Enter the interest rate (in %): ', (rate) => {
      rl.question('Enter the time (in years): ', (time) => {
        let interest = (parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100;
        console.log(`The simple interest is: ${interest}`);
        rl.close();
      });
    });
  });
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function calculatePrime() {
  rl.question('Enter a number: ', (num) => {
    if (isPrime(parseFloat(num))) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
    rl.close();
  });
}

function calculateFactorial() {
  rl.question('Enter a number: ', (num) => {
    let factorial = 1;

    for (let i = 1; i <= parseFloat(num); i++) {
      factorial *= i;
    }

    console.log(`The factorial of ${num} is: ${factorial}`);
    rl.close();
  });
}

// Call the functions
// calculateTriangleArea();
// calculateCircleArea();
// findVowels();
// calculateSimpleInterest();
// calculatePrime();
   calculateFactorial();