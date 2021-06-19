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



// Jquery Dependency

$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {

var input_val = input.val();


if (input_val === "") { return; }


var original_len = input_val.length;


var caret_pos = input.prop("selectionStart");
  

if (input_val.indexOf(".") >= 0) {


  var decimal_pos = input_val.indexOf(".");


  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);


  left_side = formatNumber(left_side);


  right_side = formatNumber(right_side);
  
  
  if (blur === "blur") {
    right_side += "00";
  }
  
  
  right_side = right_side.substring(0, 2);


  input_val = "₹" + left_side + "." + right_side;

} else {

  input_val = formatNumber(input_val);
  input_val = "₹" + input_val;
  

  if (blur === "blur") {
    input_val += ".00";
  }
}

input.val(input_val);

var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}

$(document).ready(function () {
  $(":text").keyup(function () {
    $(".amount-pre").text($(":text").val());
  });
});

$(document).ready(function() { 
  $('#currency-field').change(function() {
    $('#amount-2').val($('#currency-field').val());
  });
});

function payNow() {
  var nam = document.getElementById("name").value;
  var amo = document.getElementById("currency-field").value;
  
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
