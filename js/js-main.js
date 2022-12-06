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

const sndAObj = document.getElementById("sndA");
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
})

hearAdObj.addEventListener ("click", function() {
    stopAllAudio();
    sndAdObj.play();
})

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
    sndAObj.pause();
    sndAObj.currentTime = 0;
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

var btnC = document.getElementById("modeC");
var btnD = document.getElementById("modeD");

var spanC = document.getElementsByClassName("close")[0];
var spanD = document.getElementsByClassName("close1")[0];

btnC.onclick = function() {
    modalC.style.display = "block";
    stopAllAudio();
}

btnD.onclick = function() {
    modalD.style.display = "block";
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

window.onclick = function(event) {
    if (event.target == modalC) {
        modalC.style.display = "none";
        stopAllAudio();
    }
    if (event.target == modalD) {
        modalD.style.display = "none";
        stopAllAudio();
    }
}