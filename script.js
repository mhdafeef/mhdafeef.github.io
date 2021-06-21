document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('btn-back').style.visibility = 'visible';
  document.getElementById('btn-front').style.visibility = 'visible';

  document.getElementById('btn-back').onclick = function() {
  document.getElementById('card-inner').classList.toggle('is-flipped');
  };

  document.getElementById('btn-front').onclick = function() {
  document.getElementById('card-inner').classList.toggle('is-flipped');
  };

});



function myFunction() {
  var x = document.getElementById("amount").value;
  document.getElementById("amo-value").innerHTML = x;
}


function payNow() {
  var nam = document.getElementById("name").value;
  var amo = document.getElementById("amount").value;
  
  window.open("upi://pay?pn=MOHAMED%20AFEEF&pa=Q72011719@ybl&am=" + amo + "&tn=" + nam + "&cu=INR&mc=7277", "_self");
  }

// Disable a button if one of the inputs is empty start

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

// Disable a button if one of the inputs is empty end

var typed = new Typed(".typing", {
  strings: ["Testing Testing", "YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true});
