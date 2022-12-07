const targetDiv = document.getElementById("chords");

const chordC = document.getElementById("chordC");
const chordD = document.getElementById("chordD");
const chordE = document.getElementById("chordE");
const chordG = document.getElementById("chordG");
const chordA = document.getElementById("chordA");

const repDiv = document.getElementById("diagramC");
const thisDiv = document.getElementById("diagramD");
const thatDiv = document.getElementById("diagramE");
const thoseDiv = document.getElementById("diagramG");
const stripDiv = document.getElementById("diagramA");

const backArrow = document.getElementById("back");
const backPoint = document.getElementById("back2")
const backThere = document.getElementById("back3");
const backHere = document.getElementById("back4");
const backWay = document.getElementById("back5");

//Listens for chord buttons on home page
chordC.addEventListener ("click", function() {
    targetDiv.classList.toggle("hidden");
    repDiv.classList.replace("hidden","reveal");
});

chordD.addEventListener ("click", function() {
    targetDiv.classList.toggle("hidden");
    thisDiv.classList.replace("hidden","reveal");
});

chordE.addEventListener ("click", function() {
    targetDiv.classList.toggle("hidden");
    thatDiv.classList.replace("hidden","reveal");
});

chordG.addEventListener ("click", function() {
    targetDiv.classList.toggle("hidden");
    thoseDiv.classList.replace("hidden","reveal");
});

chordA.addEventListener ("click", function() {
    targetDiv.classList.toggle("hidden");
    stripDiv.classList.replace("hidden","reveal");
});

//Listens for back button on each unique page
backArrow.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden", "reveal");
    repDiv.classList.replace("reveal","hidden");
    stopAllAudio();
});

backPoint.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    thisDiv.classList.replace("reveal","hidden");
    stopAllAudio();
});

backThere.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    thatDiv.classList.replace("reveal","hidden");
    stopAllAudio();
});

backHere.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    thoseDiv.classList.replace("reveal","hidden");
    stopAllAudio();
});

backWay.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    stripDiv.classList.replace("reveal","hidden");
    stopAllAudio();
});

const audCObj = document.getElementById("audC");
const audAObj = document.getElementById("audA");
const audDObj = document.getElementById("audD");
const audGObj = document.getElementById("audG");
const audEObj = document.getElementById("audE");

const hearCBut = document.getElementById("hearC");
const hearABut = document.getElementById("hearA");
const hearDBut = document.getElementById("hearD");
const hearGBut = document.getElementById("hearG");
const hearEBut = document.getElementById("hearE");

hearCBut.addEventListener ("click", function() {
    audCObj.play();
});

hearABut.addEventListener ("click", function() {
    audAObj.play();
});

hearDBut.addEventListener ("click", function() {
    audDObj.play();
});

hearGBut.addEventListener ("click", function() {
    audGObj.play();
});

hearEBut.addEventListener ("click", function() {
    audEObj.play();
});

const sndCObj = document.getElementById("sndC");
const sndEObj = document.getElementById("sndE");
const sndGObj = document.getElementById("sndG");

const sndDObj = document.getElementById("sndD");
const sndFdObj = document.getElementById("sndF#");
const sndAdObj = document.getElementById("sndAd");

const sndAaObj = document.getElementById("sndA");
const sndCaObj = document.getElementById("sndC#");
const sndEaObj = document.getElementById("sndEa");

const sndEeObj = document.getElementById("sndEe");
const sndBObj = document.getElementById("sndB");
const sndGeObj = document.getElementById("sndG#");

const sndGgObj = document.getElementById("sndGg");
const sndBgObj = document.getElementById("sndBg");
const sndDgObj = document.getElementById("sndDg")

const hearCObj = document.getElementById("inCc");
const hearEObj = document.getElementById("inEc");
const hearGObj = document.getElementById("inGc");

const hearDObj = document.getElementById("inDd");
const hearFdObj = document.getElementById("inF#d");
const hearAdObj = document.getElementById("inAd");

const hearEeObj = document.getElementById("inEe");
const hearBeObj = document.getElementById("inBe");
const hearGeObj = document.getElementById("inGe");

const hearGgObj = document.getElementById("inGg");
const hearBgObj = document.getElementById("inBg");
const hearDgObj = document.getElementById("inDg");

const hearAaObj = document.getElementById("inAa");
const hearCaObj = document.getElementById("inCa");
const hearEaObj = document.getElementById("inEa");

hearCObj.addEventListener ("click", function() {
    stopAllAudio();
    sndCObj.play();
});

hearEObj.addEventListener ("click", function() {
    stopAllAudio();
    sndEObj.play();
});

hearGObj.addEventListener ("click", function() {
    stopAllAudio();
    sndGObj.play();
});

hearDObj.addEventListener ("click", function() {
    stopAllAudio();
    sndDObj.play();
});

hearFdObj.addEventListener ("click", function() {
    stopAllAudio();
    sndFdObj.play();
});

hearAdObj.addEventListener ("click", function() {
    stopAllAudio();
    sndAdObj.play();
});

hearEeObj.addEventListener ("click", function() {
    stopAllAudio();
    sndEeObj.play();
});

hearBeObj.addEventListener ("click", function() {
    stopAllAudio();
    sndBObj.play();
});

hearGeObj.addEventListener ("click", function() {
    stopAllAudio();
    sndGeObj.play();
});

hearGgObj.addEventListener("click", function() {
    stopAllAudio();
    sndGgObj.play();
});

hearBgObj.addEventListener("click", function() {
    stopAllAudio();
    sndBgObj.play();
});

hearDgObj.addEventListener("click", function() {
    stopAllAudio();
    sndDgObj.play();
});

hearAaObj.addEventListener("click", function() {
    stopAllAudio();
    sndAaObj.play();
});

hearCaObj.addEventListener("click", function() {
    stopAllAudio();
    sndCaObj.play();
});

hearEaObj.addEventListener("click", function() {
    stopAllAudio();
    sndEaObj.play();
});

function stopAllAudio() {
    audCObj.pause();
    audCObj.currentTime = 0;
    audDObj.pause();
    audDObj.currentTime = 0;
    audAObj.pause();
    audAObj.currentTime = 0;
    audGObj.pause();
    audGObj.currentTime = 0;
    audEObj.pause();
    audEObj.currentTime = 0;
    sndCObj.pause();
    sndCObj.currentTime = 0;
    sndEObj.pause();
    sndEObj.currentTime = 0;
    sndGObj.pause();
    sndGObj.currentTime = 0;
    sndDObj.pause();
    sndDObj.currentTime = 0;
    sndFdObj.pause();
    sndFdObj.currentTime = 0;
    sndAdObj.pause();
    sndAdObj.currentTime = 0;
    sndAaObj.pause();
    sndAaObj.currentTime = 0;
    sndCaObj.pause();
    sndCaObj.currentTime = 0;
    sndEaObj.pause();
    sndEaObj.currentTime = 0;
    sndEeObj.pause();
    sndEeObj.currentTime = 0;
    sndBObj.pause();
    sndBObj.currentTime = 0;
    sndGeObj.pause();
    sndGeObj.currentTime = 0;
    sndGgObj.pause();
    sndGgObj.currentTime = 0;
    sndBgObj.pause();
    sndBgObj.currentTime = 0;
    sndDgObj.pause();
    sndDgObj.currentTime = 0;
}

var modalC = document.getElementById("popC");
var modalD = document.getElementById("popD");
var modalE = document.getElementById("popE");
var modalG = document.getElementById("popG");
var modalA = document.getElementById("popA");

var btnC = document.getElementById("modeC");
var btnD = document.getElementById("modeD");
var btnE = document.getElementById("modeE");
var btnG = document.getElementById("modeG");
var btnA = document.getElementById("modeA");

var spanC = document.getElementsByClassName("close")[0];
var spanD = document.getElementsByClassName("close1")[0];
var spanE = document.getElementsByClassName("close2")[0];
var spanG = document.getElementsByClassName("close3")[0];
var spanA = document.getElementsByClassName("close4")[0];


btnC.onclick = function() {
    modalC.style.display = "block";
    stopAllAudio();
}

btnD.onclick = function() {
    modalD.style.display = "block";
    stopAllAudio();
}

btnE.onclick = function() {
    modalE.style.display = "block";
    stopAllAudio();
}

btnG.onclick = function() {
    modalG.style.display = "block";
    stopAllAudio();
}

btnA.onclick = function() {
    modalA.style.display = "block";
    stopAllAudio();
}

spanC.onclick = function() {
    modalC.style.display = "none";
    stopAllAudio();
}

spanD.onclick = function () {
    modalD.style.display = "none";
    stopAllAudio();
}

spanE.onclick = function () {
    modalE.style.display = "none";
    stopAllAudio();
}

spanG.onclick = function () {
    modalG.style.display = "none";
    stopAllAudio();
}

spanA.onclick = function () {
    modalA.style.display = "none";
    stopAllAudio();
}

window.onclick = function(event) {
    if (event.target == modalC) {
        modalC.style.display = "none";
        stopAllAudio();
    }
    if (event.target == modalD) {
        modalD.style.display = "none";
        stopAllAudio();
    }
    if (event.target == modalE) {
        modalE.style.display = "none";
        stopAllAudio();
    }
    if (event.target == modalG) {
        modalG.style.display = "none";
        stopAllAudio();
    }
    if (event.target == modalA) {
        modalA.style.display = "none";
        stopAllAudio();
    }
}