const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");
const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const container = document.querySelector(".container");

function calculateProfitAndLoss(initialPrice,quantity,currentPrice){
    
  if(initialPrice >= 0 && quantity >= 0 && currentPrice >= 0){
    if(initialPrice === "" || quantity === "" || currentPrice === ""){
        outputBox.innerText = "please!!!! fill out all the details";
        container.style.color = "red";
        container.style.backgroundColor = "rgb(121, 45, 192)";
    }
    else{
      if(initialPrice > currentPrice){
        var loss = (initialPrice - currentPrice) * quantity;
        var lossPercentage = (loss / initialPrice) * 100;
        outputBox.innerText = `your loss is ${loss}rs and your loss percentage is ${lossPercentage.toFixed(2)}%`;
        container.style.color = "red";
        container.style.backgroundColor = "blue"
      }
      else if(initialPrice < currentPrice){
          var profit = (currentPrice - initialPrice) * quantity;
          var profitPercentage = (profit / initialPrice) * 100;
          outputBox.innerText = `your profit is ${profit}rs and your profit percentage is ${profitPercentage.toFixed(2)}%`;
          container.style.color = "rgb(75, 236, 75)";
          container.style.backgroundColor = "blue"
        }
      else {
        outputBox.innerText = "No pain No gain , No gain No pain :("
        container.style.color = "red";
        container.style.backgroundColor = "rgb(121, 45, 192)";
      }
    }
      else{
    outputBox.innerText = "Please enter positive values";

  }
}


submitBtn.addEventListener("click",function (){
   calculateProfitAndLoss(initialPrice.value , quantity.value , currentPrice.value);

})
