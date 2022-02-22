function getInputValue(input){
  let inputValue = document.querySelector(input);
  let inputValueText = inputValue.value;
  let inputValueAmount = parseFloat(inputValueText);
  // clear input value 
  inputValue.value = "";
  return inputValueAmount;
  }
  //depo-withdraw total amount field
function getDepoDrawAmount(inputValueAmount,depoDrawField){
  let totalAmount = document.querySelector(depoDrawField);
  let previousTotalAmountText = totalAmount.innerHTML;
  let previousTotalAmountValue = parseFloat(previousTotalAmountText);
  let newTotalAmountValue = previousTotalAmountValue + inputValueAmount;
   totalAmount.innerHTML = newTotalAmountValue;
}

// deposit button event handler
document.querySelector("#deposit-button").addEventListener("click", function(){
  let inputValueAmount =  getInputValue("#deposit-input");
  getDepoDrawAmount(inputValueAmount,"#deposit-total");
 
 })
 // with draw button event handler
 document.querySelector("#with-draw-button").addEventListener("click", function(){
  let inputValueAmount =  getInputValue("#with-draw-input");
  getDepoDrawAmount(inputValueAmount,"#with-draw")
  
 })