$(document).ready(() => {
    document.getElementById('form:checkpoint').onclick = function () {
        console.log("check point button was pressed");
        submit();

        console.log("Submit was executed");
    }
});

function submit() {

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
    let _size = Number(_chart.attr("width").replace("px", ""));
    let color;
    let currentR = Number(document.getElementById('form:input_R').innerText);
    let dataX = $("td.dataX");
    let dataY = $("td.dataY");
    let dataR = $("td.dataR");
    let dataRes = $("td.dataRes");
    for (let i = 0; i < dataX.length; i++) {
        let x = dataX[i];
        let y = dataY[i];
        let r = dataR[i];
        let res = dataRes[i];
        if (+r.innerHTML !== currentR) {
            color = "grey";
        } else {
            if (res.innerHTML.includes("In area")) {
                color = "#28A745";
            } else {
                color = "#DC3545";
            }
        }


        const draw_x = parseFloat(x.innerHTML) * 500 / 14 + _size / 2;
        const draw_y = _size / 2 - parseFloat(y.innerHTML) * 500 / 14;

        drawGenericPoint(draw_x, draw_y, color);
    }
}


async function sendPointHidden() {
    const chart_x = Number(document.getElementById('hiddenForm:hidden_x').value);
    const chart_y = Number(document.getElementById('hiddenForm:hidden_y').value);

    addPoint(chart_x, chart_y);
}


async function addPoint(chart_x, chart_y) {
    let color;
    let _chart = $("#myCanvas");
    let _size = Number(_chart.attr("width").replace("px", ""));

    const draw_x = chart_x * 500 / 14 + _size / 2;
    const draw_y = _size / 2 - chart_y * 500 / 14;
    let dataRes = $("td.dataRes");

    let res = dataRes[dataRes.length - 1];

        if (res.innerHTML.includes("In area")) {
            color = "#28A745";
        } else {
            color = "#DC3545";
        }

    drawGenericPoint(draw_x, draw_y, color);

}


async function sendPoint() {
    const chart_y = Number(document.getElementById('form:inputY').value);
    const chart_x = Number(document.getElementById('form:inputX').value);
    addPoint(chart_x, chart_y);
}
