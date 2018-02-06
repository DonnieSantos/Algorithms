$(document).ready(function () {
    Colors.ApplyScheme(0);
    Main.BindRangeInputs();
    Main.Animate();
});

Main.BindRangeInputs = function () {

    document.getElementsByClassName("outer-speed-input")[0].addEventListener("input", function (clickEvent) {
        Main.Speed.Outer.value = Main.Speed.Outer.max * (clickEvent.target.value / 100);
    });

    document.getElementsByClassName("inner-speed-input")[0].addEventListener("input", function (clickEvent) {
        Main.Speed.Inner.value = Main.Speed.Inner.max * (clickEvent.target.value / 100);
    });

    document.getElementsByClassName("padding-input")[0].addEventListener("input", function (clickEvent) {
        Main.Padding = Main.MaxPadding * (Math.abs(clickEvent.target.value - 100) / 100);
    });

    document.getElementsByClassName("style-input")[0].addEventListener("input", function (clickEvent) {
        Colors.ApplyScheme(clickEvent.target.value);
    });
}

Main.Animate = function () {
    Main.Clear();
    Main.DrawCircles();
    requestAnimFrame(function () { Main.Animate(); });
}

Main.ConfigureOrbitingCircle = function (origin, destination, colors) {
    Main.Circle.x = origin.x + destination.padding * Math.cos(destination.radian);
    Main.Circle.y = origin.y + destination.padding * Math.sin(destination.radian);
    Main.Circle.r = destination.radius;
    Main.Circle.c = colors;
}

Main.DrawCircles = function () {
    Main.Circle.Configure(Main.CenterModel.x, Main.CenterModel.y, Main.CenterModel.radius, Colors.ColorScheme.CenterFidget);
    Main.Circle.Draw();
    for (var i = 0; i < Main.FidgetModels.length; i++) {
        Main.FidgetModels[i].radian += Main.Speed.Outer.value;
        Main.FidgetModels[i].padding = Main.Padding;
        Main.ConfigureOrbitingCircle(Main.CenterModel, Main.FidgetModels[i], Colors.ColorScheme.Fidgets[i]);
        Main.Circle.Draw();
        var fidget = { "x": Main.Circle.x, "y": Main.Circle.y }
        for (var j = 0; j < Main.LightModels.length; j++) {
            var lightModel = Main.LightModels[j];
            lightModel.radian += Main.Speed.Inner.value;
            Main.ConfigureOrbitingCircle(fidget, lightModel, Colors.ColorScheme.Lights[j]);
            Main.Circle.Draw();
        }
    }
    Colors.ColorScheme.UpdateAlphaValues();
}