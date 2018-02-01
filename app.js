var ip = prompt("IP Address Mesin");
var url = `http://${ip}`;
var pressed = false;
$(document).ready(function () {
    // Keyboard
    $(document).on("keydown", function (e) {
        console.log(e.keyCode);
        if (!pressed) {
            pressed = true;
            if (e.keyCode === 38 || e.keyCode === 87) {
                // Forward
                forward($("#forward"));
            } else if (e.keyCode === 40 || e.keyCode == 83) {
                // Backward
                backward($("#backward"));
            } else if (e.keyCode === 39 || e.keyCode === 68) {
                // Right
                right($("#right"));
            } else if (e.keyCode === 37 || e.keyCode === 65) {
                // Left
                left($("#left"));
            }
        }
    });

    // DOM Button
    $("#forward").click(function(e){ forward($(this)); });
    $("#backward").click(function(e){ backward($(this)); });
    $("#right").click(function(e){ right($(this)); });
    $("#left").click(function(e){ left($(this)); });

    $(document).on("keyup", function (e) {
        pressed = false;
        get("/stop");
        $("#forward").removeClass("pressed");
        $("#backward").removeClass("pressed");
        $("#right").removeClass("pressed");
        $("#left").removeClass("pressed");
    });
});

function forward($btn) {
    $btn.addClass("pressed");
    get("/forward");
}

function backward($btn) {
    $btn.addClass("pressed");
    get("/backward");
}

function right($btn) {
    $btn.addClass("pressed");
    get("/right");
}

function left($btn) {
    $btn.addClass("pressed");
    get("/left");
}

function get(endpoint) {
    var $ret = $.get(url + endpoint);
    $ret.then((res) => { console.log(res) });
    $ret.catch((err) => { console.log(`Error ${err.statusText}`) });
}