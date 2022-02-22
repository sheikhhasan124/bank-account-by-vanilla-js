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
// total balance field
function getcurrentBalance(){
  let totalBalance = document.querySelector('#balance-total');
let previousTotalBalanceText = totalBalance.innerHTML;
let previousTotalBalenceValue = parseFloat(previousTotalBalanceText);
return previousTotalBalenceValue;
}

function getTotalBalance(inputValueAmount,isAdd){
let totalBalance = document.querySelector('#balance-total');
let previousTotalBalenceValue = getcurrentBalance();
if(isAdd == true){
  let newTotalBalenceValue = previousTotalBalenceValue + inputValueAmount;
 totalBalance.innerHTML = newTotalBalenceValue;
}else{
  let newTotalBalenceValue = previousTotalBalenceValue - inputValueAmount;
 totalBalance.innerHTML = newTotalBalenceValue;
}
}

// deposit button event handler
document.querySelector("#deposit-button").addEventListener("click", function(){
  let inputValueAmount =  getInputValue("#deposit-input");
  if(inputValueAmount>0){
    getDepoDrawAmount(inputValueAmount,"#deposit-total");
    getTotalBalance(inputValueAmount,true);
  }
  
 
 })
 // with draw button event handler
 document.querySelector("#with-draw-button").addEventListener("click", function(){
  let inputValueAmount =  getInputValue("#with-draw-input");
 let currentBalance = getcurrentBalance();
if(inputValueAmount>0 && inputValueAmount<currentBalance){
  getDepoDrawAmount(inputValueAmount,"#with-draw")
  getTotalBalance(inputValueAmount,false);
}
 })