const billAmount = document.querySelector("#bill-amount");
const amountReceived = document.querySelector("#amount-received");
const btn = document.querySelector("#btn");

const message = document.querySelector("#message");

const finalResult = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,200,100,50,20,10,5,1];

btn.addEventListener("click", function checkingbillandreceived(){
    message.style.display = "none";
    if(billAmount.value > 0){
       if(billAmount.value <= amountReceived.value){
          const change = amountReceived.value - billAmount.value;
          calculateChange(change);
       }
       else{
           showMessage("Should be atleast greater than or Equal to bill amount")
       }
    }
    else{
        showMessage("Invalid Input");
    }
})

function calculateChange(change){
    for(i=0;i<availableNotes.length;i++){
        const noOfNotes = Math.trunc(change/availableNotes[i]);
        change %= availableNotes[i];
        finalResult[i].innerText = noOfNotes;
    }
}

function showMessage(i){
   message.style.display = "block";
   message.innerText = i;
}