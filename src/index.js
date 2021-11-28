function ready() {
    let body = document.body;

    let div1 = document.createElement('div');
    div1.innerHTML = 'First Name:';
    body.append(div1);


    let input1 = document.createElement('input');
    input1.id = "input1";
    input1.addEventListener('input', error);
    body.append(input1);

    let div2 = document.createElement('div');
    body.append(div2);

    let div3 = document.createElement('div');
    div3.innerHTML = 'Last Name:';
    body.append(div3);

    let input2 = document.createElement('input');
    input2.addEventListener('input', error)
    input2.id = "input2";
    body.append(input2);


    let div4 = document.createElement('div');
    body.append(div4);

    let div5 = document.createElement('div');
    div5.innerHTML = 'Email:';
    body.append(div5);

    let input3 = document.createElement('input');
    input3.id = "input1";
    input3.addEventListener('input', passwordEmail);
    body.append(input3);

    let div6 = document.createElement('div');
    body.append(div6);

    let div7 = document.createElement('div');
    div7.innerHTML = 'Password:';
    body.append(div7);

    let input4 = document.createElement('input');
    input4.id = "input1";
    input4.addEventListener('input', passwordError);
    body.append(input4);
    let p = document.createElement('p');
    body.append(p);

    let div8 = document.createElement('div');
    body.append(div8);

    let button = document.createElement('button');
    button.id = "button";
    body.append(button);
    document.getElementById('button').innerHTML = 'Sign up';
}

function error(event) {
    const input = event.target;
    const errorDiv = input.nextSibling;
    console.log(errorDiv)
    console.log(input.value.length)
    if (input.value.length > 255) {
        errorDiv.innerHTML = "max 255";
    } else {
        errorDiv.innerHTML = "";
    }
}

function passwordError(event) {
    const input = event.target;
    const errorDiv = input.nextSibling;
    console.log(input.value.length)
    if (input.value.length < 8 || input.value.length > 64) {
        errorDiv.innerHTML = "error";
    } else {
        errorDiv.innerHTML = "";
    }
}

function passwordEmail() {

}

document.addEventListener("DOMContentLoaded", ready);




