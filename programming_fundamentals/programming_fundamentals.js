/*
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

// Programming Fundamentals. 
const f = l => {
    let es = 0, p = 0, c = 1, n = 0
    while (c <= l) {
      n = c + p;
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  console.log(f(55))

  //Same as //// 

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))
  */