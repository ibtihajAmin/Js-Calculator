//This function is used to take input from user 
insert = (num) => {
    document.form.textview.value = document.form.textview.value + num;
}

//This function is used for calculating the given value from user's input
equal = () => {
    let givenValue = document.form.textview.value;
    if (givenValue) {
        document.form.textview.value = eval(givenValue);
    }
}

//Clear all digit or number from the view part
allClear = () => {
    document.form.textview.value = "";
}

//Clear one digit or operator from the view part
removeOneDigit = () => {
    let givenValue = document.form.textview.value;
    document.form.textview.value = givenValue.substring(0, givenValue.length - 1);
}
