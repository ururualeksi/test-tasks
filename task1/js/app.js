var buttonSignin = document.getElementById('signin');

buttonSignin.addEventListener("click", function() {
  let email = document.getElementById('input-box-email').value;
  let password = document.getElementById('input-box-password').value;
  alert(email + ':' + password);
});
