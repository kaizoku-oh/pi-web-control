var xmlhttp;
xmlhttp=new XMLHttpRequest();

function lightOn(){
        xmlhttp.open("GET","cgi-bin/ledOn.cgi",true);
        xmlhttp.send();
}

function lightOff(){
        xmlhttp.open("GET","cgi-bin/ledOff.cgi",true);
        xmlhttp.send();
}

function mvZero(){
        xmlhttp.open("GET","cgi-bin/mv0.cgi",true);
        xmlhttp.send();
}

function mvMiddle(){
        xmlhttp.open("GET","cgi-bin/mv90.cgi",true);
        xmlhttp.send();
}

function mvEnd(){
        xmlhttp.open("GET","cgi-bin/mv180.cgi",true);
        xmlhttp.send();
}

function relayOn(){
		xmlhttp.open("GET","cgi-bin/relOn.cgi",true);
        xmlhttp.send();
}

function relayOff(){
		xmlhttp.open("GET","cgi-bin/relOff.cgi",true);
        xmlhttp.send();
}

function pictureChangeLedOn(){
	document.getElementById('ledoff').src='images/ledOn.png';
}

function pictureChangeLedOff(){
	document.getElementById('ledoff').src='images/ledOff.png';
}

function pictureChangeServoToZero(){
	document.getElementById('servo').src='images/servo_0.png';
}

function pictureChangeServoToMiddle(){
	document.getElementById('servo').src='images/servo_90.png';
}

function pictureChangeServoToEnd(){
	document.getElementById('servo').src='images/servo_180.png';
}

function pictureChangeRelToOn(){
	document.getElementById('relOff').src='images/relon.png';
}

function pictureChangeRelToOff(){
	document.getElementById('relOff').src='images/reloff.png';
}

function on(){
	lightOn();
	pictureChangeLedOn();
}

function off(){
	lightOff();
	pictureChangeLedOff();
}

function zero(){
	mvZero();
	pictureChangeServoToZero();
}

function middle(){
	mvMiddle();
	pictureChangeServoToMiddle();
}

function end(){
	mvEnd();
	pictureChangeServoToEnd();
}

function Rl_on(){
	relayOn();
	pictureChangeRelToOn();
}

function Rl_off(){
	relayOff();
	pictureChangeRelToOff();
}