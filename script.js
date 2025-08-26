document.getElementById("submitButton").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(e);
    
    const number = 12345;
    const pin = 12345;


    const numberInput = document.getElementById("numberInput").value
    const numberInputConvert = parseInt(numberInput)

    const pinInput = document.getElementById("passwordInput").value
    const pinInputConvert = parseInt(pinInput)


    // console.log(numberInputConvert,pinInputConvert);
    

    if(number === numberInputConvert && pin === pinInputConvert){
       window.location.href='./HomePage.html'
        
    } else
    {
        alert('Error number or pin');
    }
    
})



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

