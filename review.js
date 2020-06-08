let display = document.querySelector('#inpt');
const numbers = document.querySelectorAll('.numbers button')
const operators = document.querySelectorAll('.operators button');
const answer = document.getElementById('equals')
let array = []
let operatorArray = []
let number = ""
let numbersArray = []

numbers.forEach(button => {
  button.addEventListener('click', () => {
    inpt.textContent += button.textContent
    // array.push(button.textContent)
    // console.log(array);
    number+= button.textContent
    
  })
})
operators.forEach(button => {
  button.addEventListener('click', () => {
    // array.push(button.textContent)
    operatorArray.push(button.textContent)
    inpt.textContent += button.textContent
    numbersArray.push(number)
    number = ""
    // console.log(array);
  })
})

// };
answer.addEventListener('click', ()=>{
    inpt.textContent += answer.textContent;
    // console.log(array);
    // pos = array.findIndex(x => x ==="+" || x ==="-" || x === "x" || x === "÷");
    numbersArray.push(number)
    firstNum = numbersArray[0];
    secondNum = numbersArray[1];
      if (operatorArray[0] === "+") {
    inpt.textContent += (parseFloat(firstNum) + parseFloat(secondNum))
    // console.log(operatorArray);
    // console.log(parseFloat(firstNum));
    } else if 
      (operatorArray[0] === "-") {
        inpt.textContent += (parseFloat(firstNum) - parseFloat(secondNum))
    } else if 
      (operatorArray[0] === "x") {
        inpt.textContent += (parseFloat(firstNum) * parseFloat(secondNum))
    } else if 
      (operatorArray[0] === "÷") {
        inpt.textContent += (parseFloat(firstNum) / parseFloat(secondNum))
    } else {
      console.log(error);
    }
});