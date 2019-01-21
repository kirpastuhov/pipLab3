function drawGenericPoint(draw_x, draw_y, fillStyle) {
    let _chart = $("#myCanvas");

    // console.log("drawing the point:DrawpointFile");
    _chart.drawEllipse({
        fillStyle: fillStyle,
        x: draw_x, y: draw_y,
        width: 5, height: 5
    });
    // console.log("Done DrawpointFile");
}