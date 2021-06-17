$('.butn-front').on('click', function () {
    $('.card').toggleClass('flipped');
  });

  $('.butn-back').on('click', function () {
    $('.card').toggleClass('flipped');
  });


  function payNow() {
    var nam = document.getElementById("name").value;
    var amo = document.getElementById("amount").value;
    
    window.open("upi://pay?pn=MOHAMED%20AFEEF&pa=Q72011719@ybl&am=" + amo + "&tn=" + nam + "&cu=INR&mc=7277");
    }

/* Disable a button if one of the inputs is empty start */

    let payNowBtn = document.querySelector('.paynow-btn');
    let payForm = document.querySelector('.pay-form');
    let inputs = [...payForm.querySelectorAll('.user-input')];

    function validate() {
      let isIncomplete = inputs.some(input => !input.value);
      payNowBtn.disabled = isIncomplete;
      payNowBtn.style.cursor = isIncomplete ? 'not-allowed' : 'pointer';
    }

    payForm.addEventListener('input', validate);
    validate();

/* Disable a button if one of the inputs is empty end */


var typed = new Typed(".typing", {
  strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true});
