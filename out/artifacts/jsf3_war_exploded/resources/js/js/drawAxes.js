function drawChart() {
    drawAxis();
    drawAxisNames();
    drawAxisValues();
    drawHistory();
}


function drawAxis() {
    let _chart = $("#myCanvas");
    let _size = Number(_chart.attr("width").replace("px", ""));
    let center = _size / 2;
    let _radius = Number(document.getElementById('form:input_R').innerText);

    let radius = _size / 14 * _radius;
    // let radius = _radius;


    _chart.drawRect({
        fillStyle: "#474748",
        x: 0, y: 0,
        fromCenter: false,
        width: _size,
        height: _size
    });


    _chart.drawLine({ // drawing OX
        strokeStyle: "#dddddd",
        strokeWidth: 2,
        endArrow: true,
        arrowRadius: 12,
        x1: _size / 20, y1: center,
        x2: _size * 19 / 20, y2: center
    });

    _chart.drawLine({ //drawing OY
        strokeStyle: "#dddddd",
        strokeWidth: 2,
        startArrow: true,
        arrowRadius: 12,
        x1: center, y1: _size / 20,
        x2: center, y2: _size * 19 / 20

    });

    _chart.drawArc({
        strokeStyle: '#963b94',
        strokeWidth: 3,
        x: center, y: center,
        radius: radius / 2,
        start: 90, end: 180
    });

    _chart.drawLine({ //drawing triangle
        strokeStyle: "#963b94",
        strokeWidth: 3,
        x1: center, y1: center - radius,
        x2: center - radius , y2: center,
        x3: center, y3: center - radius,
        x4: center, y4: center
    });

    _chart.drawLine({ //drawing rect
        strokeStyle: "#963b94",
        strokeWidth: 3,
        x1: center - radius / 2, y1: center + radius,
        x2: center - radius / 2, y2: center,
        x3: center - radius / 2, y3: center + radius,
        x4: center, y4: center + radius

    });

    _chart.drawLine({
        strokeStyle: "#963b94",
        strokeWidth: 3,
        x1: center , y1: center,
        x2: center + radius / 2, y2: center
    });

    _chart.drawLine({
        strokeStyle: "#963b94",
        strokeWidth: 3,
        x1: center - radius , y1: center,
        x2: center - radius / 2, y2: center
    });

    _chart.drawLine({
        strokeStyle: "#963b94",
        strokeWidth: 3,
        x1: center , y1: center + radius,
        x2: center, y2: center + radius / 2
    });
}

function drawGenericLine(x1, y1, x2, y2, strokeStyle) {
    let _chart = $("#myCanvas");
    _chart.drawLine({
        strokeStyle: strokeStyle,
        strokeWidth: 1,
        x1: x1, y1: y1,
        x2: x2, y2: y2
    });
}


function drawAxisNames() {
    let _chart = $("#myCanvas");
    let _size = Number(_chart.attr("width").replace("px", ""));
    drawGenericText('y', _size * 11 / 20, _size / 20, 20);
    drawGenericText('x', _size * 19 / 20, _size * 9 / 20, 20);
}

function drawGenericText(text, x, y, size) {
    let _chart = $("#myCanvas");
    _chart.drawText({
        text: text,
        fontFamily: 'monospace',
        fontSize: size,
        fillStyle: '#dddddd',
        x: x, y: y
    });
}

function drawAxisValues() {
    let _chart = $("#myCanvas");
    let _size = Number(_chart.attr("width").replace("px", ""));
    for (let i = -5; i <= 5; i++) {
        if (i === 0) {
            continue;
        }

        let x1 = _size / 2 + _size / 14 * i;
        let y1 = _size * 49 / 100;
        let y2 = _size * 51 / 100;

        drawGenericLine(x1, y1, x1, y2, '#dddddd');
        drawGenericLine(y1, x1, y2, x1, '#dddddd');

        drawGenericText(i, x1, y1 - _size / 40, 15);
        drawGenericText(i, y1 + _size / 20, _size / 2 - _size / 14 * i, 15);
    }
}



