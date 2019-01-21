let _size = 0;
let _chart = 0;
let _radius = 0;

$(document).ready(updateAndDraw);

function updateRadiusValue() {
    // _radius = Number($("#inputR").val());
    // _radius = Number(document.getElementById('form:input_R').value);
    // document.getElementById("form:hidden_x").value = radius;

    _radius = Number(document.getElementById('form:input_R').innerText);
    // console.log("radius:", _radius);

}


function updateAndDraw() {
    _chart = $('#myCanvas');
    $("#input_R").change(() => {
        updateRadiusValue();
        drawChart();
    });

    updateRadiusValue();
    drawChart();


    _chart.click(e => {
        chartClick(e);
    });

    $('#checkpoint').mousedown(() => false);

}

function chartClick(e) {
    const x = e.pageX - _chart.offset().left;
    const y = e.pageY - _chart.offset().top;

    console.log("x1 = ", x);
    console.log("y1 = ", y);
    console.log("e.pageX = ", e.pageX);
    console.log("e.pageY = ", e.pageY);

    const chart_x = (x - 250) * 14 / 500;
    const chart_y = (250 - y) * 14 / 500;

    console.log("x2 = ", chart_x);
    console.log("y2 = ", chart_y);

    addPoint(chart_x, chart_y);
}

