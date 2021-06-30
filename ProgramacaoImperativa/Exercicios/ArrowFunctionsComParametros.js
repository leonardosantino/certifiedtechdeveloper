let FizzBuzz = (num1, num2) => {
    for (let i = 1; i <= 100; i++){
        if (i % num1 == 0 && i % num2 == 0){
            console.log(i, 'FizzBuzz é multiplo de', num1, 'é', num2)
        }
        else if (i % num1 == 0){
            console.log(i, 'Fizz', 'é multiplo de', num1)
        }
        else if (i % num2 == 0){
            console.log(i, 'Buzz', 'é multiplo de', num2)
        }
        else {
            console.log(i)
        }
    }
}
FizzBuzz(4,3)
//  Objetos literais
// destrution
// spreads