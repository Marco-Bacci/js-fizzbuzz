//dichiaro nomi dei multipli
//fizz = i % 3 === 0;
//buzz = i % 5 === 0;
//fizzBuzz = i % 3 === 0 && i % 5 === 0;


for (let i=1; i<=100; i++){
  if (i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz")
    console.log(`${i}`)
  }
  
  else if (i % 3 === 0){
    console.log("Fizz")
    console.log(`${i}`)
  }
  else if (i % 5 === 0){
    console.log("Buzz")
    console.log(`${i}`)
  }
  
}
