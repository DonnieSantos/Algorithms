Main.Radius = 60;
Main.Padding = 140;
Main.MaxPadding = 140;

Main.CenterModel = {
    "radius": Main.Radius,
    "padding": Main.Padding,
    "x": 295,
    "y": 240
};

Main.FidgetModels = [
    {
        "radian": 0.5,
        "radius": Main.CenterModel.radius,
        "padding": Main.Padding * 2.666
    },
    {
        "radian": Main.OneThirdRadian + 0.5,
        "radius": Main.CenterModel.radius,
        "padding": Main.Padding * 2.666
    },
    {
        "radian": Main.OneThirdRadian * 2 + 0.5,
        "radius": Main.CenterModel.radius,
        "padding": Main.Padding * 2.666
    }
];

Main.LightModels = [
    {
        "radian": 0,
        "radius": Main.CenterModel.radius / 4,
        "padding": Main.Radius / 2
    },
    {
        "radian": Main.OneThirdRadian,
        "radius": Main.CenterModel.radius / 4,
        "padding": Main.Radius / 2
    },
    {
        "radian": Main.OneThirdRadian * 2,
        "radius": Main.CenterModel.radius / 4,
        "padding": Main.Radius / 2
    }
];

Main.Speed = {
    "Inner": {
        "value": 0,
        "max": 0.5
    },
    "Outer": {
        "value": 0,
        "max": 1.0
    }
};