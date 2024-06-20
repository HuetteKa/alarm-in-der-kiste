let Zähler = 0
basic.forever(function () {
    if (input.lightLevel() > 30) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(5000)
        if (input.buttonIsPressed(Button.A)) {
            basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
            basic.pause(5000)
            basic.turnRgbLedOff()
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
            basic.pause(2500)
            Zähler = 5
            for (let index = 0; index < 5; index++) {
                basic.showNumber(Zähler)
                Zähler += -1
                basic.showNumber(Zähler)
                basic.pause(500)
                music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            }
            Zähler = 5
        } else {
            Zähler = 5
            for (let index = 0; index < 5; index++) {
                basic.showNumber(Zähler)
                Zähler += -1
                basic.showNumber(Zähler)
                basic.pause(500)
                music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            }
            Zähler = 5
        }
    }
})
