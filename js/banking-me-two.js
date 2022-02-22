function getInputValue(input){
  let inputValue = document.querySelector(input);
  let inputValueText = inputValue.value;
  let inputValueAmount = parseFloat(inputValueText);
  // clear input value 
  inputValue.value = "";
  return inputValueAmount;
  }

// deposit button event handler
document.querySelector("#deposit-button").addEventListener("click", function(){
  getInputValue("#deposit-input");
 console.log(getInputValue)
 })
 // with draw button event handler
 document.querySelector("#with-draw-button").addEventListener("click", function(){
  getInputValue("#with-draw-input");
  console.log(getInputValue)
 })