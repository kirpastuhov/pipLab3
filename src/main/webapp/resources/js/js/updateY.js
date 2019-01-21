let prevValue = false;

$(document).ready(async () => {
    updateY();
});

function updateY() {
    const y = document.getElementById('form:inputY');

    const check = checkY(document.getElementById('form:inputY').value);

    if (check === prevValue) {
        return;
    }

    y.classList.toggle("is-invalid");
    y.classList.toggle("is-valid");

    prevValue = !prevValue;
}