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
});

backPoint.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    thisDiv.classList.replace("reveal","hidden");
});

backThere.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    thatDiv.classList.replace("reveal","hidden");
});

backHere.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    thoseDiv.classList.replace("reveal","hidden");
});

backWay.addEventListener ("click", function() {
    targetDiv.classList.replace("hidden","reveal");
    stripDiv.classList.replace("reveal","hidden");
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