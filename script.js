document.getElementById("submitButton").addEventListener("click",function(e){
    e.preventDefault()
    const number = 12345;
    const pin = 12345;


    const numberInput = document.getElementById("numberInput").value
    const numberInputConvert = parseInt(numberInput)

    const pinInput = document.getElementById("passwordInput").value
    const pinInputConvert = parseInt(pinInput)


    // console.log(numberInputConvert,pinInputConvert);
    

    if(number === numberInputConvert && pin === pinInputConvert){
       window.location.href='./Main.html'
        
    } else
    {
        alert('Error number or pin');
        
    }
    
    
})
