Colors = {}
Colors.Alpha = {}
Colors.ColorScheme = {}
Colors.ColorSchemeIndex = 0;

Colors.IsMusicOn = function () {
    return Colors.ColorSchemeIndex == 3;
}

Colors.Scheme = function (circleModels) {

    this.Fidgets = [];
    this.Lights = [];
    this.Circles = [];

    this.Circles[0] = this.CenterFidget = circleModels[0];
    this.Circles[1] = this.Fidgets[0] = circleModels[1];
    this.Circles[2] = this.Fidgets[1] = circleModels[2];
    this.Circles[3] = this.Fidgets[2] = circleModels[3];
    this.Circles[4] = this.Lights[0] = circleModels[4];
    this.Circles[5] = this.Lights[1] = circleModels[5];
    this.Circles[6] = this.Lights[2] = circleModels[6];

    this.UpdateAlphaValues = function () {
        for (var i = 0; i < this.Circles.length; i++) {
            this.Circles[i].UpdateAlpha();
        }
    }
}

Colors.AlphaLevel = function (level, increase, changeRage) {

    this.level = level;
    this.increase = increase;
    this.changeRage = changeRage;

    this.Update = function () {

        if (this.level > 1.0) {
            this.increase = false;
        } else if (this.level < 0.1) {
            this.increase = true;
        }

        this.level += this.increase == true ? this.changeRage : -(this.changeRage);
    }
}

Colors.Circle = function (r, g, b, w, s, fr, fg, fb, a1, a2) {

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = Colors.GetAlphaLevel(a1);
    this.w = w;
    this.s = s;
    this.fill = {};
    this.fill.r = fr;
    this.fill.g = fg;
    this.fill.b = fb;
    this.fill.a = Colors.GetAlphaLevel(a2);

    this.UpdateAlpha = function () {
        this.a.Update();
        this.fill.a.Update();
    }
}

Colors.GetAlphaLevel = function (name) {
    if (name == "Fast") return new Colors.AlphaLevel(1.0, false, 0.5);
    if (name == "Slow") return new Colors.AlphaLevel(1.0, false, 0.04);
    return new Colors.AlphaLevel(1.0, false, 0.0);
}

Colors.Schemes = function () {
    return [
        new Colors.Scheme([
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(255, 255, 255, 0, 0, 255, 255, 255, "None", "None"),
            new Colors.Circle(255, 255, 255, 0, 0, 255, 255, 255, "None", "None"),
            new Colors.Circle(255, 255, 255, 0, 0, 255, 255, 255, "None", "None")
        ]),
        new Colors.Scheme([
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 2, 2, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 2, 2, 255, 255, 255, "None", "None"),
            new Colors.Circle(0, 0, 0, 2, 2, 255, 255, 255, "None", "None")
        ]),
        new Colors.Scheme([
            new Colors.Circle(50, 50, 150, 3, 3, 80, 80, 160, "None", "None"),
            new Colors.Circle(150, 50, 50, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(50, 150, 50, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(50, 50, 150, 3, 3, 255, 255, 255, "None", "None"),
            new Colors.Circle(255, 100, 100, 2, 10, 255, 0, 0, "None", "None"),
            new Colors.Circle(100, 255, 100, 2, 10, 0, 255, 0, "None", "None"),
            new Colors.Circle(100, 100, 255, 2, 10, 0, 0, 255, "None", "None")
        ]),
        new Colors.Scheme([
            new Colors.Circle(200, 150, 250, 6, 10, 80, 80, 160, "None", "None"),
            new Colors.Circle(255, 0, 0, 15, 75, 225, 225, 225, "Slow", "None"),
            new Colors.Circle(0, 255, 0, 15, 75, 225, 225, 225, "Slow", "None"),
            new Colors.Circle(0, 0, 255, 15, 75, 225, 225, 225, "Slow", "None"),
            new Colors.Circle(255, 0, 0, 5, 10, 255, 0, 0, "Fast", "Fast"),
            new Colors.Circle(0, 255, 0, 5, 10, 0, 255, 0, "Fast", "Fast"),
            new Colors.Circle(0, 0, 255, 5, 10, 0, 0, 255, "Fast", "Fast")
        ])
    ]
}

Colors.ApplyScheme = function (index) {
    Colors.ColorSchemeIndex = index;
    Colors.ColorScheme = Colors.Schemes()[index];
    $("BODY").css("background-color", Colors.IsMusicOn() ? "black" : "E3E3FF");
    $(".canvas-element").css("background-color", Colors.IsMusicOn() ? "black" : "white");
    $("audio").trigger(Colors.IsMusicOn() ? "play" : "pause");
}