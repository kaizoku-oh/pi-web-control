# Pi Web Control
<img src="https://www.raspberrypi.org/wp-content/uploads/2012/03/raspberry-pi-logo.png" alt="Raspberry Pi Logo" align="left" style="margin-right: 25px" height=150>
Is a web interface to controle the raspberry pi GPIOs via a webserver.
The idea is to control anything connected to GPIOs, using low level commands written with shell scripts commanded straight from a HTML webpage. 
Not using higher level languages as Python for example, this makes the Pi very responsive because it is recieving the commands from the shell witch is much closer to the OS and the kernel than the other programming languages. For this project I used ijh dfcds [link to Google!](http://google.com) as the websever, it's a light weight webserver designed and optimized for high performance environments with a small memory footprint compared to other web-servers like apache or nginx.

## How it works
The website is composed of different HTML pages
### index.html
The main page that loads on startup. You can change it to put whatever you want in it, here I've put a Carousel slideshow with bootstrap.

![Image of home](screenshots/home.png)
### dashboard.html
This is where all your buttons and controls will be.
![Image of dashboard](screenshots/dashboard.png)
### streaming.html
Here you'll find your Pi's webcam streaming video, for this to work you must change the code in streaming.html page: in the iframe tag go to the src attribute and change <Your Pi's IP Here> with your Pi's IP.

![Image of streaming](screenshots/streaming.png)
### about.html
Here you can put information about your project and its version.
![Image of about](screenshots/about.png)
## License
This project is licensed under the terms of the MIT license.
