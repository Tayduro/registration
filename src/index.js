function error1() {
  // const input = event.target;
  const input = document.querySelector('#input1');
  const errorDiv = input.nextSibling;
  if (input.value === '') {
    errorDiv.innerHTML = '';
    return false;
  }
  if (input.value.length > 255) {
    errorDiv.innerHTML = 'max 255';
    return false;
  }
  errorDiv.innerHTML = '';
  return true;
}

function error2() {
  // const input = event.target;
  const input = document.querySelector('#input2');
  const errorDiv = input.nextSibling;
  if (input.value === '') {
    errorDiv.innerHTML = '';
    return false;
  }
  if (input.value.length > 255) {
    errorDiv.innerHTML = 'max 255';
    return false;
  }
  errorDiv.innerHTML = '';
  return true;
}

function passwordError() {
  // const input = event.target;
  const input = document.querySelector('#input4');
  const errorDiv = input.nextSibling;
  if (input.value === '') {
    errorDiv.innerHTML = '';
    return false;
  }
  if (input.value.length < 8 || input.value.length > 64) {
    errorDiv.innerHTML = 'error';
    return false;
  }
  errorDiv.innerHTML = '';
  return true;
}

function errorEmail() {
  // const input = event.target;
  const input = document.querySelector('#input3');
  const errorDiv = input.nextSibling;
  if (input.value === '') {
    errorDiv.innerHTML = '';
    return false;
  }
  if (input.validity.typeMismatch === true) {
    errorDiv.innerHTML = 'email is invalid';
    return false;
  }
  errorDiv.innerHTML = '';
  return true;
}

function fieldValidation() {
  if (errorEmail() && passwordError() && error1() && error2()) {
    window.location.href = 'confirmedRegistration.html';
  }
}

function ready() {
  const { body } = document;

  const divForms = document.createElement('div');
  divForms.classList.add('center');
  body.append(divForms);

  const div1 = document.createElement('div');
  div1.innerHTML = 'First Name:';
  divForms.append(div1);

  const input1 = document.createElement('input');
  input1.id = 'input1';
  input1.addEventListener('input', error1);
  divForms.append(input1);

  const div2 = document.createElement('div');
  divForms.append(div2);

  const div3 = document.createElement('div');
  div3.innerHTML = 'Last Name:';
  divForms.append(div3);

  const input2 = document.createElement('input');
  input2.addEventListener('input', error2);
  input2.id = 'input2';
  divForms.append(input2);

  const div4 = document.createElement('div');
  divForms.append(div4);

  const div5 = document.createElement('div');
  div5.innerHTML = 'Email:';
  divForms.append(div5);

  const input3 = document.createElement('input');
  input3.id = 'input3';
  input3.type = 'email';
  input3.setAttribute('class', 'emailDiv');
  input3.addEventListener('input', errorEmail);
  divForms.append(input3);

  const div6 = document.createElement('div');
  divForms.append(div6);

  const div7 = document.createElement('div');
  div7.innerHTML = 'Password:';
  divForms.append(div7);

  const input4 = document.createElement('input');
  input4.id = 'input4';
  input4.addEventListener('input', passwordError);
  divForms.append(input4);
  const div8 = document.createElement('div');
  divForms.append(div8);

  const p = document.createElement('p');
  divForms.append(p);

  const button = document.createElement('button');
  button.id = 'button';
  button.addEventListener('click', fieldValidation);
  divForms.append(button);
  document.getElementById('button').innerHTML = 'Sign up';
}

document.addEventListener('DOMContentLoaded', ready);
