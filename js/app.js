$(document).ready(function() {

  $('#first').hide();
  setTimeout(function() {
    $('#logo').fadeOut(500);
    $('#first').show();
  }, 2000); //splash


  $('select').material_select();

  var $inputPhone = $('#telephone');
  var $btnNext = $('#next');

  $inputPhone.keyup(function() {
    if ($(this).val().length === 10) {
      $btnNext.attr({
        disabled: false,
        href: '../views/verify.html' //verify the phone number have 10 digits
      });
    } else {
      $btnNext.attr('disabled', 'disabled');
    }
  });

  $btnNext.click(function() {
    var number = Math.floor(Math.random() * 800) + 100; //generate the code and send to user in alert
    alert('LAB - ' + number);
    localStorage.labCode = number;
  });

  var $inputCode = $('.input-code');
  var $btnCheck = $('#verifyCode');
  var $btnResend = $('#resendCode');

  $inputPhone.keypress(function(tecla) {
    if (tecla.charCode < 48 || tecla.charCode > 57)
      return false; //verify the code
  });

  $inputCode.eq(0).focus();
  $inputCode.keyup(function() {
    var code1 = $inputCode.eq(0).val(),
      code2 = $inputCode.eq(1).val(), //compare and return the index
      code3 = $inputCode.eq(2).val();

    var code = code1 + code2 + code3;

    if (code === localStorage.labCode) {
      $btnCheck.attr({
        disabled: false,
        href: '../views/form.html' //verify the code and redirect to the next
      });
    } else {
      $btnCheck.attr('disabled', true);
    }
  });

  $btnResend.click(function() {
    $inputCode.val('');
    var number = Math.floor(Math.random() * 800) + 100;
    alert('LAB - ' + number); //resend the code
    localStorage.labCode = number;
  });

  var validateName = false;
  var validateEmail = false;
  var validateChecked = false;

  $('#inputEmail').on('input', function(event) {
    var CHECKEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (CHECKEMAIL.test($(this).val())) {
      validateEmail = true; //validate the email
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#inputName').on('input', function() {
    if ($(this).val()) {
      validateName = true;
      activeButton();
    } else {
      desactiveButton(); //validate the name field
    }
  });

  $('.checkbox').on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {  //if the checkbox is check button next appear able to click
      desactiveButton();
    }
  });

  function activeButton() {
    if (validateName && validateEmail && validateChecked) {
      $('#submit').attr({
        disabled: false,
        href: '../views/success.html' // when the user complete your register redirection to successfully view
      });
    }
  }

  function desactiveButton() {
    $('#submit').attr('disabled', 'disabled');
  }
});
