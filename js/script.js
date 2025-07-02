//dichiaro nomi dei multipli
//fizz = i % 3 === 0;
//buzz = i % 5 === 0;
//fizzBuzz = i % 3 === 0 && i % 5 === 0;


for (let i=1; i<=100; i++){
  if (i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz")
  }
  
  else if (i % 3 === 0){
    console.log("Fizz")
  }
  else if (i % 5 === 0){
    console.log("Buzz")
  }
  
}
