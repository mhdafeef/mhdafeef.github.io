$('.butn-front').on('click', function () {
    $('.card').toggleClass('flipped');
  });

  $('.butn-back').on('click', function () {
    $('.card').toggleClass('flipped');
  });


  function payNow() {
    var nam = document.getElementById("name").value;
    var amo = document.getElementById("amount").value;
    
    window.open("upi://pay?pa=Q72011719@ybl&pn=MOHAMED%20AFEEF&tn=" + nam + "&am=" + amo + "&cu=INR&mc=7277");
    }


  function success() {
    if(document.getElementById("name", "amount").value==="") {
             document.getElementById('button').disabled = true; 
         } else { 
             document.getElementById('button').disabled = false;
         }
     }