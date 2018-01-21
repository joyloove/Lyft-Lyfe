$(document).ready(function() {

  $('#first').hide();
  setTimeout(function() {
    $('#logo').fadeOut(500);
    $('#first').show();
  }, 2000);


  $('select').material_select();

  var $inputPhone = $('#telephone');
  var $btnNext = $('#next');

  $inputPhone.keyup(function() {
    if ($(this).val().length === 10) {
      $btnNext.attr({
        disabled: false,
        href: '../views/verify.html'
      });
    } else {
      $btnNext.attr('disabled', 'disabled');
    }
  });

  $btnNext.click(function() {
    var number = Math.floor(Math.random() * 900) + 100;
    alert('LAB - ' + number);
    localStorage.labCode = number;
  });

  var $inputCode = $('.input-code');
  var $btnCheck = $('#verifyCode');
  var $btnResend = $('#resendCode');

  $inputPhone.keypress(function(tecla) {
    if (tecla.charCode < 48 || tecla.charCode > 57)
      return false;
  });

  $inputCode.eq(0).focus();
  $inputCode.keyup(function() {
    var code1 = $inputCode.eq(0).val(),
      code2 = $inputCode.eq(1).val(),
      code3 = $inputCode.eq(2).val();

    var code = code1 + code2 + code3;

    if (code === localStorage.labCode) {
      $btnCheck.attr({
        disabled: false,
        href: '../views/form.html'
      });
    } else {
      $btnCheck.attr('disabled', true);
    }
  });

  $btnResend.click(function() {
    $inputCode.val('');
    var number = Math.floor(Math.random() * 900) + 100;
    alert('LAB - ' + number);
    localStorage.labCode = number;
  });

  var validateName = false;
  var validateEmail = false;
  var validateChecked = false;

  $('#inputEmail').on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
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
      desactiveButton();
    }
  });

  $('.checkbox').on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  function activeButton() {
    if (validateName && validateEmail && validateChecked) {
      $('#submit').attr({
        disabled: false,
        href: '../views/success.html'
      });
    }
  }

  function desactiveButton() {
    $('#submit').attr('disabled', 'disabled');
  }
});
