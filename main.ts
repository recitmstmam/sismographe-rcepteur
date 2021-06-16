radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.plotBarGraph(
    value,
    0
    )
})
radio.setGroup(1)
