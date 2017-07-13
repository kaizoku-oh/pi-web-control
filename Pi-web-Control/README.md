# Pi Web Control
<img src="https://www.raspberrypi.org/wp-content/uploads/2012/03/raspberry-pi-logo.png" alt="Raspberry Pi Logo" align="left" style="margin-right: 25px" height=150>
Is a web interface to controle the raspberry pi GPIOs via a webserver.
The idea is to control anything connected to GPIOs, using low level commands written with shell scripts commanded straight from a HTML webpage.

## Known issues
This code is more suitable for robot control than home automation because it's about controlling the Pi outputs.
When reloading the page the images come back to their initial state and doesn't sync.
For the moment I can't use gpio shell commands to read an input on the gpio then serve it on the webpage. 
So this Method is only for controlling outputs. 
For reading inputs you might want to use flask or node js. The only input here is the webcam video streaming.

## License
This project is licensed under the terms of the MIT license.
