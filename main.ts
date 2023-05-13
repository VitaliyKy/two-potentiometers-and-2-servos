let potentiometer = 0
makerbit.setLcdBacklight(LcdBacklight.On)
makerbit.showStringOnLcd1602("MAZE SPACE GAME", makerbit.position1602(LcdPosition1602.Pos1), 16)
basic.pause(5000)
music.playTone(330, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(294, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(200)
makerbit.clearLcd1602()
basic.pause(100)
music.playMelody("C5 - C5 - C5 - C5 C5 ", 120)
makerbit.showStringOnLcd1602("Go !!!!", makerbit.position1602(LcdPosition1602.Pos4), 14)
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P10)
    pins.servoWritePin(AnalogPin.P2, pins.map(
    pins.analogReadPin(AnalogPin.P10),
    0,
    1023,
    0,
    180
    ))
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    pins.servoWritePin(AnalogPin.P3, pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    180
    ))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        makerbit.clearLcd1602()
        basic.pause(100)
        makerbit.showStringOnLcd1602("bit.ly/1234567", makerbit.position1602(LcdPosition1602.Pos1), 14)
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
})
