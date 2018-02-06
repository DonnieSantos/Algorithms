Main = {}

Main.BindRangeInputs = function () {

    document.getElementsByClassName("outer-speed-input")[0].addEventListener("input", function (clickEvent) {
        Model.Speed.Outer.value = Model.Speed.Outer.max * (clickEvent.target.value / 100);
    });

    document.getElementsByClassName("inner-speed-input")[0].addEventListener("input", function (clickEvent) {
        Model.Speed.Inner.value = Model.Speed.Inner.max * (clickEvent.target.value / 100);
    });

    document.getElementsByClassName("padding-input")[0].addEventListener("input", function (clickEvent) {
        Model.Padding = Model.MaxPadding * (Math.abs(clickEvent.target.value - 100) / 100);
    });

    document.getElementsByClassName("radius-input")[0].addEventListener("input", function (clickEvent) {
        var percent = (clickEvent.target.value - 60) / 30;
        Model.Fidgets[0].radius = clickEvent.target.value;
        Model.Fidgets[1].radius = clickEvent.target.value;
        Model.Fidgets[2].radius = clickEvent.target.value;
        Model.Lights[0].radius = (Model.Centerpiece.radius / 4) + (15 * percent);
        Model.Lights[1].radius = (Model.Centerpiece.radius / 4) + (15 * percent);
        Model.Lights[2].radius = (Model.Centerpiece.radius / 4) + (15 * percent);
        Model.Lights[0].padding = (Model.Radius / 2) + (15 * percent);
        Model.Lights[1].padding = (Model.Radius / 2) + (15 * percent);
        Model.Lights[2].padding = (Model.Radius / 2) + (15 * percent);
    });

    document.getElementsByClassName("style-input")[0].addEventListener("input", function (clickEvent) {
        Colors.ApplyScheme(clickEvent.target.value);
    });
}

Main.Render = function () {
    UI.DrawCircleModel(Model.Centerpiece, Colors.ColorScheme.CenterFidget)
    for (var i = 0; i < Model.Fidgets.length; i++) {
        Model.Fidgets[i].radian += Model.Speed.Outer.value;
        Model.Fidgets[i].padding = Model.Padding;
        var fidget = UI.DrawOrbitingCircle(Model.Centerpiece, Model.Fidgets[i], Colors.ColorScheme.Fidgets[i]);
        for (var j = 0; j < Model.Lights.length; j++) {
            var lightModel = Model.Lights[j];
            lightModel.radian += Model.Speed.Inner.value;
            UI.DrawOrbitingCircle(fidget, lightModel, Colors.ColorScheme.Lights[j]);
        }
    }
    Colors.ColorScheme.UpdateAlphaValues();
}

Main.Animate = function () {
    UI.Clear();
    Main.Render();
    requestAnimFrame(function () { Main.Animate(); });
}

$(document).ready(function () {
    Colors.ApplyScheme(0);
    Main.BindRangeInputs();
    Main.Animate();
});