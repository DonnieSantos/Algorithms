UI = {};
UI.Canvas = document.getElementById('myCanvas');
UI.Context = UI.Canvas.getContext('2d');
UI.MaxRadian = 2 * Math.PI;
UI.OneThirdRadian = UI.MaxRadian / 3;

UI.Clear = function () {
    UI.Context.clearRect(0, 0, UI.Canvas.width, UI.Canvas.height);
}

UI.DrawCircleModel = function (model, colors) {
    UI.DrawCircle(model.x, model.y, model.radius, colors);
}

UI.DrawOrbitingCircle = function (origin, destination, colors) {
    var x = origin.x + destination.padding * Math.cos(destination.radian);
    var y = origin.y + destination.padding * Math.sin(destination.radian);
    var radius = destination.radius;
    UI.DrawCircle(x, y, radius, colors);
    return { "x": x, "y": y }
}

UI.DrawCircle = function (x, y, radius, colors) {

    var outlineColor = "rgba(" + colors.r + "," + colors.g + "," + colors.b + "," + colors.a.level + ")";
    var fillColor = "rgba(" + colors.fill.r + "," + colors.fill.g + "," + colors.fill.b + "," + colors.fill.a.level + ")";

    UI.Context.lineWidth = colors.w;
    UI.Context.shadowBlur = colors.s;
    UI.Context.strokeStyle = outlineColor;
    UI.Context.shadowColor = outlineColor;
    UI.Context.beginPath();
    UI.Context.arc(x, y, radius, 0, UI.MaxRadian);
    UI.Context.stroke();
    UI.Context.fillStyle = fillColor;
    UI.Context.fill();
}

window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (callback) { window.setTimeout(callback, 1000 / 60); };
})();