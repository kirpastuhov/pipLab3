$(document).ready(() => {
    $("#checkpoint").unbind('click').click(() => {
        console.log("check point button was pressed");
        submit();
        console.log("Submit was executed");
    });
});

function submit() {
    // const x = Number($("#inputX").val());

    const y = Number(document.getElementById('form:inputY').value);
    const x = Number(document.getElementById('form:inputX').value);





    console.log(x);
    console.log(y);

    if (!checkFields(y)) return;

    addPoint(x, y);
}

function addColumn($tr, text) {
    $("<td/>", {
        text: text
    }).appendTo($tr);
}


async function addPoint(chart_x, chart_y) {
    const result = await sendRequest(chart_x, chart_y);

    console.log(result);

    const draw_x = chart_x * 500 / 14 + 250;
    const draw_y = 250 - chart_y * 500 / 14;

    drawGenericPoint(draw_x, draw_y, '#28A745');
}

async function sendRequest(chart_x, chart_y) {
    const chart_r = Number($("#inputR").val());
    const $tr = $("<tr/>");
    $.ajax({
        url: 'ControllerServlet',
        type: "post",
        data: {
            chart_x: chart_x, chart_y: chart_y, chart_r: chart_r
        },
        success:

            function (responseText) {
                $.each(responseText, function (key, value) {
                    console.log(key);
                    if (key === "date") {
                        addColumn($tr, value);
                        console.log(value);
                    }
                    else if (key === "x") {
                        addColumn($tr, value);
                        console.log(value);
                    }
                    else if (key === "y") {
                        addColumn($tr, value);
                        console.log(value);
                    }
                   else  if (key === "r") {
                        addColumn($tr, value);
                        console.log(value);
                    }
                    else if (key === "isIn") {
                        addColumn($tr, value);
                        console.log(value);
                    }
                });
                $("#results").prepend($tr);

            }

    });
}