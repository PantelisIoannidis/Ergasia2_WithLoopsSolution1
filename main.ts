let Μετρητής = 0
input.onButtonPressed(Button.A, function () {
    Μετρητής = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Μετρητής)
        Μετρητής += -1
    }
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
