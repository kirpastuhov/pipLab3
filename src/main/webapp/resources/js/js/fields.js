$(document).ready(function () {

    let $x = $("#inputX");

    for (let x = -4; x <= 4; x += 1) {
        $('<option/>', {
            val: x,
            text: x
        }).appendTo($x);
    }

    $('option[value="0"]', $x).attr('selected', 'selected');

    let $r = document.getElementById('form:input_R');




    $('option[value="5"]', $r).attr('selected', 'selected');

});

