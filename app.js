let display = document.querySelector('#inpt');
const numbers = document.querySelectorAll('.numbers button')
const operators = document.querySelectorAll('.operators button');
const answer = document.getElementById('equals')
let array = []


// numbers.addEventListener('click', () => {
//   console.log("digit");
// });

// numbers.addEventListener('click', event => {
//   console.log("pressed")
// })
numbers.forEach(button => {
  button.addEventListener('click', event => {
    inpt.textContent += button.textContent
    array.push(button.textContent)
    console.log(array);
  })
})
operators.forEach(button => {
  button.addEventListener('click', event => {
    array.push(button.textContent)
    inpt.textContent += button.textContent
    console.log(array);
  })
})
answer.addEventListener('click', ()=>{

    inpt.textContent += answer.textContent
    });
