$(document).ready(() => {
    document.getElementById('form:checkpoint').onclick = function() {
        console.log("check point button was pressed");
        submit();

        console.log("Submit was executed");
    }
});

function submit() {
    // const x = Number($("#inputX").val());

    const y = Number(document.getElementById('form:inputY').value);
    const x = Number(document.getElementById('form:inputX').value);

    _size = Number(_chart.attr("width").replace("px", ""));



    console.log("SubmitXY: " + x);
    console.log(y);

    if (!checkFields(y)) return;

    addPoint(x, y);

}

function drawHistory() {
    // var currentR = getValue('R');
    let _chart = $("#myCanvas");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    let _size = Number(_chart.attr("width").replace("px", ""));
    let center = _size / 2;
    let _radius = Number(document.getElementById('form:input_R').innerText);
    console.log("radiusHistory:", _radius);
    console.log("DrawingHistory!!!");
    var color;
    var currentR = Number(document.getElementById('form:input_R').innerText);
    var dataX = $("td.dataX");
    var dataY = $("td.dataY");
    var dataR = $("td.dataR");
    var dataRes = $("td.dataRes");
    for (var i = 0; i < dataX.length; i++) {
        var x = dataX[i];
        var y = dataY[i];
        var r = dataR[i];
        var res = dataRes[i];
        if (+r.innerHTML != currentR) {
            color = "grey";
        } else {
            if (res.innerHTML.includes("In area")) {
                color = "#28A745";
            } else {
                color = "#DC3545";
            }
        }
        // drawPoint(parseFloat(x.innerHTML), parseFloat(y.innerHTML));

        const draw_x = parseFloat(x.innerHTML) * 500 / 14 + _size / 2;
        const draw_y = _size / 2 - parseFloat(y.innerHTML) * 500 / 14;

        drawGenericPoint(draw_x, draw_y, color);

        console.log("historyX: " + parseFloat(x.innerHTML) + " historyY: " + parseFloat(y.innerHTML))

    }
}

function drawPoint(x, y) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    let divWidth = (canvasWidth / 2 - 10) / (5 + 1);
    let divHeight = (canvasHeight / 2 - 10) / (5 + 1);

    ctx.beginPath();
    ctx.arc(canvasWidth / 2 + x * divWidth + 0.5, canvasHeight / 2 - y * divHeight + 0.5, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}


function addColumn($tr, text) {
    $("<td/>", {
        text: text
    }).appendTo($tr);
}

async function sendPointHidden() {
    const chart_x = Number(document.getElementById('hiddenForm:hidden_x').value);
    const chart_y = Number(document.getElementById('hiddenForm:hidden_y').value);

    addPoint(chart_x, chart_y);
}


async function addPoint(chart_x, chart_y) {
    const result = $("#result_value").text();

    console.log(chart_x, chart_y, result);

    const draw_x = chart_x * 500 / 14 + _size / 2;
    const draw_y = _size / 2 - chart_y * 500 / 14;
    console.log("HEREE");
    drawGenericPoint(draw_x, draw_y, result ? '#28A745' : '#DC3545');
}


async function sendPoint() {
    const chart_y = Number(document.getElementById('form:inputY').value);
    const chart_x = Number(document.getElementById('form:inputX').value);
    addPoint(chart_x, chart_y);
}

async function sendRequest(chart_x, chart_y) {
    const chart_r = Number($("#inputR").val());
    const $tr = $("<tr/>");
    // $.ajax({
    //     url: 'ControllerServlet',
    //     type: "post",
    //     data: {
    //         chart_x: chart_x, chart_y: chart_y, chart_r: chart_r
    //     },
        // success:
        //
        //     function (responseText) {
        //         $.each(responseText, function (key, value) {
        //             console.log(key);
        //             if (key === "date") {
        //                 addColumn($tr, value);
        //                 console.log(value);
        //             }
        //             else if (key === "x") {
        //                 addColumn($tr, value);
        //                 console.log(value);
        //             }
        //             else if (key === "y") {
        //                 addColumn($tr, value);
        //                 console.log(value);
        //             }
        //            else  if (key === "r") {
        //                 addColumn($tr, value);
        //                 console.log(value);
        //             }
        //             else if (key === "isIn") {
        //                 addColumn($tr, value);
        //                 console.log(value);
        //             }
        //         });
        //         $("#results").prepend($tr);
        //
        //     }

    // });
}