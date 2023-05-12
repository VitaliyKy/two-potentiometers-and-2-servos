let potentiometer = 0
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P0)
    pins.servoWritePin(AnalogPin.P2, pins.map(
    pins.analogReadPin(AnalogPin.P0),
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
