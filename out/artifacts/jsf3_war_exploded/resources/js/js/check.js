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





    console.log("SubmitXY: " + x);
    console.log(y);

    if (!checkFields(y)) return;

    addPoint(x, y);

}

function drawHistory() {
    // var currentR = getValue('R');
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
        if (+r.innerHTML !== currentR) {
            color = "black";
        } else {
            if (res.innerHTML.includes("In area")) {
                color = "rgb(0, 255, 0)";
            } else {
                color = "rgb(255, 0, 0)";
            }
        }
        // drawPoint(parseFloat(x.innerHTML), parseFloat(y.innerHTML));
        drawGenericPoint(parseFloat(x.innerHTML), parseFloat(y.innerHTML), color);

        console.log("historyX: " + parseFloat(x.innerHTML) + "historyY: " + parseFloat(y.innerHTML) )

    }
}

function addColumn($tr, text) {
    $("<td/>", {
        text: text
    }).appendTo($tr);
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