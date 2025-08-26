// ! Add Mouney Function
document.getElementById('AddMoneyBtn').addEventListener("click",()=>{
   
   
    document.getElementById('addMoney').style.display='block';
    document.getElementById('LatestPayment').style.display='none';
    document.getElementById('cashoutMoney').style.display='none';
    document.getElementById('transferMoney').style.display='none';
    document.getElementById('getBonus').style.display='none';
    document.getElementById('payBill').style.display='none';
    document.getElementById('Transaction').style.display='none';

})

// ! Add Mouney Function
document.getElementById('CashoutBtn').addEventListener("click",()=>{
   
    document.getElementById('addMoney').style.display='none';
    document.getElementById('LatestPayment').style.display='none';
    document.getElementById('cashoutMoney').style.display='block';
    document.getElementById('transferMoney').style.display='none';
    document.getElementById('getBonus').style.display='none';
    document.getElementById('payBill').style.display='none';
    document.getElementById('Transaction').style.display='none';
    
})
// ! Get Bonus Function
document.getElementById('GetBonusBtn').addEventListener("click",()=>{
   
   document.getElementById('addMoney').style.display='none';
    document.getElementById('LatestPayment').style.display='none';
    document.getElementById('cashoutMoney').style.display='none';
    document.getElementById('transferMoney').style.display='none';
    document.getElementById('getBonus').style.display='block';
    document.getElementById('payBill').style.display='none';
    document.getElementById('Transaction').style.display='none';
})

// ! Paybill Function
document.getElementById('PaybillBtn').addEventListener("click",()=>{
   document.getElementById('addMoney').style.display='none';
    document.getElementById('LatestPayment').style.display='none';
    document.getElementById('cashoutMoney').style.display='none';
    document.getElementById('transferMoney').style.display='none';
    document.getElementById('getBonus').style.display='none';
    document.getElementById('payBill').style.display='block';
    document.getElementById('Transaction').style.display='none';
})

// ! Transfer Money Function
document.getElementById('TransferMoneyBtn').addEventListener("click",()=>{
   document.getElementById('addMoney').style.display='none';
    document.getElementById('LatestPayment').style.display='none';
    document.getElementById('cashoutMoney').style.display='none';
    document.getElementById('transferMoney').style.display='block';
    document.getElementById('getBonus').style.display='none';
    document.getElementById('payBill').style.display='none';
    document.getElementById('Transaction').style.display='none';
})

// ! Transacation Function
document.getElementById('TransactionBtn').addEventListener("click",()=>{
   document.getElementById('addMoney').style.display='none';
    document.getElementById('LatestPayment').style.display='none';
    document.getElementById('cashoutMoney').style.display='none';
    document.getElementById('transferMoney').style.display='none';
    document.getElementById('getBonus').style.display='none';
    document.getElementById('payBill').style.display='none';
    document.getElementById('Transaction').style.display='block';
})



// * Add Money Button Function

document.getElementById("addMoneyButton").addEventListener("click",(e)=>{
    e.preventDefault();
    let availableBalance = parseInt(document.getElementById("Balance").innerText);
    let addAmount = parseInt(document.getElementById("addAmount").value)
    document.getElementById("Balance").innerText = availableBalance + addAmount
})

// * Cashout Money Button Function

document.getElementById('cashOut').addEventListener("click",(e)=>{
    e.preventDefault();
    let availableBalance = parseInt(document.getElementById("Balance").innerText);
    let cashOut = parseInt(document.getElementById('cashoutBalance').value)
    document.getElementById("Balance").innerText = availableBalance - cashOut
})


// * Transfer Money Button Function

document.getElementById('sendMoney').addEventListener("click",(e)=>{
    e.preventDefault();
    let availableBalance = parseInt(document.getElementById("Balance").innerText);
    let amountSend = parseInt(document.getElementById('amountSend').value)
    document.getElementById("Balance").innerText = availableBalance - amountSend
})


// * Get Bonus Money Button Function

document.getElementById('sendMoney').addEventListener("click",(e)=>{
    e.preventDefault();
    let availableBalance = parseInt(document.getElementById("Balance").innerText);
    let amountSend = parseInt(document.getElementById('amountSend').value)
    document.getElementById("Balance").innerText = availableBalance - amountSend
})