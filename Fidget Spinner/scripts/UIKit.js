Main = {};
Main.Circle = {};
Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MaxRadian = 2 * Math.PI;
Main.OneThirdRadian = Main.MaxRadian / 3;

Main.Clear = function () {
    Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);
}

Main.Circle.Configure = function(x, y, radius, colors) {
    Main.Circle.x = x;
    Main.Circle.y = y;
    Main.Circle.r = radius;
    Main.Circle.c = colors;
}

Main.Circle.Draw = function () {

    var colors = Main.Circle.c;
    var outlineColor = "rgba(" + colors.r + "," + colors.g + "," + colors.b + "," + colors.a.level + ")";
    var fillColor = "rgba(" + colors.fill.r + "," + colors.fill.g + "," + colors.fill.b + "," + colors.fill.a.level + ")";

    Main.Context.lineWidth = colors.w;
    Main.Context.shadowBlur = colors.s;
    Main.Context.strokeStyle = outlineColor;
    Main.Context.shadowColor = outlineColor;
    Main.Context.beginPath();
    Main.Context.arc(this.x, this.y, this.r, 0, Main.MaxRadian);
    Main.Context.stroke();
    Main.Context.fillStyle = fillColor;
    Main.Context.fill();
}

window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (callback) { window.setTimeout(callback, 1000 / 60); };
})();