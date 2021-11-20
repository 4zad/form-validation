/*
    =================================================
    Author: Muhammad Ahmed (4zad)
    Copyright (c) 2021 Muhammad Ahmed (4zad).
    All rights reserved.
    =================================================
*/

insertErr = (errorStr) => {
    let errPanel = document.getElementById('panel');
    let errContainer = document.createElement('p');
    let newline = document.createElement('br');
    let error = document.createTextNode(errorStr);

    errContainer.appendChild(error);
    errPanel.appendChild(errContainer);
    errPanel.appendChild(newline);
}


password = () => {
    let flag = true, loopFlag, i;

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    //password match validation
    for (i = 0, loopFlag = true; i < password.length && loopFlag; i++) {
        if (password[i] != confirmPassword[i]) {
            flag = false;
            loopFlag = false;
            insertErr('Password fields must match.');
        }
    }
    //password length validation
    if (password.length != 6) {
        if (flag) flag = false;
        insertErr('Password must be exactly 6 characters in length.');
    }
    //starts with alphabet validation
    if (!(/[a-zA-Z]/).test(password[0])) {
        if (flag) flag = false;
        insertErr('Password must begin with an letter.');
    }
    //includes an uppercase validation
    if (!(/.*[A-Z].*/).test(password)) {
        if (flag) flag = false;
        insertErr('Password must contain atleast 1 uppercase.');
    }
    //includes a digit validation
    if (!(/.*[0-9].*/).test(password)) {
        if (flag) flag = false;
        insertErr('Password must contain atleast 1 digit.');
    }

    return flag;
}

username = () => {
    let flag = true;

    const username = document.getElementById('username').value;

    //starts with alphabet validation
    if (!(/[a-zA-Z]/).test(username[0])) {
        if (flag) flag = false;
        insertErr('Username must begin with an letter.');
    }

    return flag;
}

validate = (form) => {
    let flag = true;

    //NOTE: The same flag varable is used for both password and username to make code less redundant. 
    //In the scenario where password does not follow the required criteria flag will become false. If 'flag' is assigned a value of 'false' before the username() function is called we do not want the 'flag' to accidentally be assigned the value of 'true' if the username() function returns 'true'. Thus, when the 'flag' is assigned a 'false' value through the password() function we will call the username() function, without assigning it's return value to the variable 'flag'. This will ensure the 'SUCCESS!' message is only printed through the insertErr() function when both password and username fields match the required criteria.
    if (flag) flag = password();
    else password();
    if (flag) flag = username();
    else username();
    if (flag) insertErr('SUCCESS!')

    return flag;
}
