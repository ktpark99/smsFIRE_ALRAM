ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Heart)
} else {
    ESP8266_IoT.connectWifi("iptime5G", "01092611378")
}
if (ESP8266_IoT.thingSpeakState(true)) {
    basic.showIcon(IconNames.SmallHeart)
    ESP8266_IoT.setData(
    "FQBXEJCOO4XINOJH",
    0,
    input.temperature()
    )
} else {
    ESP8266_IoT.connectThingSpeak()
}
basic.forever(function () {
	
})
