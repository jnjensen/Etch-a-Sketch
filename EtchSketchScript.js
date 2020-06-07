const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const inputWidth = document.querySelector("#gridWidth");
const inputHeight = document.querySelector("#gridHeight");
const submitBtn = document.querySelector("#submit");
const colorBtn = document.querySelector("#color");
var currentColor = colorBtn.value;
const shadeBtn = document.querySelector("#shading");
const rainbowBtn = document.querySelector("#rainbow");
var regularMode = "on";
var shadingMode = "off";
var rainbowMode = "off";
var height = 16;
var width = 16;

function getRandomColor() {
    let rand1 = Math.floor(Math.random() * 360);
  
    return `hsl(${rand1}, 100%, 70%)`;
  }

function colorPixel (){
    if (regularMode == "on"){
        currentColor = colorBtn.value;
        this.style.backgroundColor = currentColor;
    } else if (shadingMode == "on"){
        var opacity = Number(this.style.opacity);
        var shadeColor = currentColor;
        if (this.style.backgroundColor !== "black") {
        this.style.opacity = 0.1;
        this.style.backgroundColor = "black";
        }
        if (opacity < 1) {
        this.style.opacity = opacity + 0.1;
        }
    }else{
        currentColor = getRandomColor();
        this.style.backgroundColor = currentColor;
    }
}


function gridCreate (w, h){
    var num = w * h;
    for (i = 0; i < num; i++){
        var pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", colorPixel);
        container.appendChild(pixel);
    }
    container.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
}

function resetGrid (){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    gridCreate(width, height);
}

function gridSize (){
    if (inputHeight.value != 0 && inputHeight.value != null){
        height = inputHeight.value;
    }
    if (inputWidth.value != 0 && inputWidth.value != null){
        width = inputWidth.value;
    }
    
    resetGrid();
}

function toggleRainbowMode () {
    if (rainbowMode == "on"){
        regularMode = "on";
        shadingMode = "off";
        rainbowMode = "off";
        rainbowBtn.innerHTML = "Rainbow: off"
    }else{
        regularMode = "off";
        shadingMode = "off";
        rainbowMode = "on";
        rainbowBtn.innerHTML = "Rainbow: on"
    }
}

function toggleShadingMode () {
    if (shadingMode == "on"){
        regularMode = "on";
        shadingMode = "off";
        rainbowMode = "off";
        shadeBtn.innerHTML = "Shading: off"
    }else{
        regularMode = "off";
        shadingMode = "on";
        rainbowMode = "off";
        shadeBtn.innerHTML = "Shading: on"
    }
}

reset.addEventListener("click", resetGrid);
submitBtn.addEventListener("click", gridSize);
shadeBtn.addEventListener("click", toggleShadingMode);
rainbowBtn.addEventListener("click", toggleRainbowMode);

gridCreate(width, height);
