function checkFields(form) {
    return checkY(form);
}

function checkY(value) {
    const number = Number(value);
    // console.log(number + ": YYYYY");
    return value !== "" && !isNaN(number) && number >= -5 && number <= 3;
}