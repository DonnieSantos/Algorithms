Model = {}
Model.Radius = 60;
Model.Padding = 140;
Model.MaxPadding = 140;

Model.Centerpiece = {
    "radius": Model.Radius,
    "padding": Model.Padding,
    "x": 295,
    "y": 240
};

Model.Fidgets = [
    {
        "radian": 0.5,
        "radius": Model.Centerpiece.radius,
        "padding": Model.Padding * 2.666
    },
    {
        "radian": UI.OneThirdRadian + 0.5,
        "radius": Model.Centerpiece.radius,
        "padding": Model.Padding * 2.666
    },
    {
        "radian": UI.OneThirdRadian * 2 + 0.5,
        "radius": Model.Centerpiece.radius,
        "padding": Model.Padding * 2.666
    }
];

Model.Lights = [
    {
        "radian": 0,
        "radius": Model.Centerpiece.radius / 4,
        "padding": Model.Radius / 2
    },
    {
        "radian": UI.OneThirdRadian,
        "radius": Model.Centerpiece.radius / 4,
        "padding": Model.Radius / 2
    },
    {
        "radian": UI.OneThirdRadian * 2,
        "radius": Model.Centerpiece.radius / 4,
        "padding": Model.Radius / 2
    }
];

Model.Speed = {
    "Inner": {
        "value": 0,
        "max": 0.5
    },
    "Outer": {
        "value": 0,
        "max": 1.0
    }
};