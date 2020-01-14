
function P1() {
	if (status == "true") {
		document.getElementById("id-do-podcast1").play();
		document.getElementById("play1").src = '../img/midia/pause.svg';
		status = "false";
	} else {
		document.getElementById("id-do-podcast1").pause();
		document.getElementById("play1").src = '../img/midia/play.svg';
		status = "true";
	}
}

function P2() {
	if (status == "true") {
		document.getElementById("id-do-podcast2").play();
		document.getElementById("play2").src = '../img/midia/pause.svg';
		status = "false";
	} else {
		document.getElementById("id-do-podcast2").pause();
		document.getElementById("play2").src = '../img/midia/play.svg';
		status = "true";
	}
}

function P3() {
	if (status == "true") {
		document.getElementById("id-do-podcast3").play();
		document.getElementById("play3").src = '../img/midia/pause.svg';
		status = "false";
	} else {
		document.getElementById("id-do-podcast3").pause();
		document.getElementById("play3").src = '../img/midia/play.svg';
		status = "true";
	}
}

function P4() {
	if (status == "true") {
		document.getElementById("id-do-podcast4").play();
		document.getElementById("play4").src = '../img/midia/pause.svg';
		status = "false";
	} else {
		document.getElementById("id-do-podcast4").pause();
		document.getElementById("play4").src = '../img/midia/play.svg';
		status = "true";
	}
}

