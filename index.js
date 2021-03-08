const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");

function updateBG() {
  var character = document.getElementById('character').value;
  var sprite = document.getElementById('sprite').value;

  if(sprite !== "") {
    var background = new Image();
    background.src = `../${character.trim()}/${sprite.trim()}.png`
    background.onload = () => {
      canvas.width = background.width;
      canvas.height = background.height;
      c.drawImage(background,0,0,);
    }

    console.log(character + " || " + sprite)
    console.log(background.src)
  } else {
    console.log("no image source")
  }
}

///CLEAR
function clear() {
  c.beginPath();
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.stroke();

  updateBG();
}

function clearHurt() {
  clear();
  setTimeout(() => {
    drawHit();
  }, 10)
}

function clearHit() {
  clear();
  setTimeout(() => {
    drawHurt()
  }, 10)
}

///DRAW
function drawRect(colour, width, height, xOffset, yOffset) {
  var cropX = parseInt(document.getElementById("cropX").value);
  var cropY = parseInt(document.getElementById("cropY").value);
  var matrix30 = parseInt(document.getElementById("matrix30").value);
  var matrix31 = parseInt(document.getElementById("matrix31").value);

  c.beginPath();
  c.strokeStyle = colour;
  c.rect(
  cropX - matrix30 - parseInt(width) + parseInt(xOffset) + 1.5, 
  cropY - matrix31 - parseInt(height) + parseInt(yOffset) + 0.5, 
  parseInt(width) * 2 - 1, 
  parseInt(height) * 2
  )
  c.stroke();
}

function drawHurt() {
  drawRect(
    "#00ff00",
    document.getElementById("w1").value,
    document.getElementById("h1").value,
    document.getElementById("xOffset1").value,
    document.getElementById("yOffset1").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w2").value,
    document.getElementById("h2").value,
    document.getElementById("xOffset2").value,
    document.getElementById("yOffset2").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w3").value,
    document.getElementById("h3").value,
    document.getElementById("xOffset3").value,
    document.getElementById("yOffset3").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w4").value,
    document.getElementById("h4").value,
    document.getElementById("xOffset4").value,
    document.getElementById("yOffset4").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w5").value,
    document.getElementById("h5").value,
    document.getElementById("xOffset5").value,
    document.getElementById("yOffset5").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w6").value,
    document.getElementById("h6").value,
    document.getElementById("xOffset6").value,
    document.getElementById("yOffset6").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w7").value,
    document.getElementById("h7").value,
    document.getElementById("xOffset7").value,
    document.getElementById("yOffset7").value
  )
  console.log("Drew hurtboxes");
}

function drawHit() {
  drawRect(
    "#ff0000",
    document.getElementById("w11").value,
    document.getElementById("h11").value,
    document.getElementById("xOffset11").value,
    document.getElementById("yOffset11").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w12").value,
    document.getElementById("h12").value,
    document.getElementById("xOffset12").value,
    document.getElementById("yOffset12").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w13").value,
    document.getElementById("h13").value,
    document.getElementById("xOffset13").value,
    document.getElementById("yOffset13").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w14").value,
    document.getElementById("h14").value,
    document.getElementById("xOffset14").value,
    document.getElementById("yOffset14").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w15").value,
    document.getElementById("h15").value,
    document.getElementById("xOffset15").value,
    document.getElementById("yOffset15").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w16").value,
    document.getElementById("h16").value,
    document.getElementById("xOffset16").value,
    document.getElementById("yOffset16").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w17").value,
    document.getElementById("h17").value,
    document.getElementById("xOffset17").value,
    document.getElementById("yOffset17").value
  )
  console.log("Drew hitboxes");
}

function draw() {
  drawHit(); 
  drawHurt();
}

document.addEventListener("keyup", (e) => {
  if (e.code == "Enter") {
    draw();
  }
})

///RESET
function resetHurt(){
  document.getElementById("w1").value = null;
  document.getElementById("h1").value = null;
  document.getElementById("xOffset1").value = null;
  document.getElementById("yOffset1").value = null;

  document.getElementById("w2").value = null;
  document.getElementById("h2").value = null;
  document.getElementById("xOffset2").value = null;
  document.getElementById("yOffset2").value = null;

  document.getElementById("w3").value = null;
  document.getElementById("h3").value = null;
  document.getElementById("xOffset3").value = null;
  document.getElementById("yOffset3").value = null;

  document.getElementById("w4").value = null;
  document.getElementById("h4").value = null;
  document.getElementById("xOffset4").value = null;
  document.getElementById("yOffset4").value = null;

  document.getElementById("w5").value = null;
  document.getElementById("h5").value = null;
  document.getElementById("xOffset5").value = null;
  document.getElementById("yOffset5").value = null;

  document.getElementById("w6").value = null;
  document.getElementById("h6").value = null;
  document.getElementById("xOffset6").value = null;
  document.getElementById("yOffset6").value = null;

  document.getElementById("w7").value = null;
  document.getElementById("h7").value = null;
  document.getElementById("xOffset7").value = null;
  document.getElementById("yOffset7").value = null;

  console.log("Reset Hurt");
}

function resetHit() {
  document.getElementById("w11").value = null;
  document.getElementById("h11").value = null;
  document.getElementById("xOffset11").value = null;
  document.getElementById("yOffset11").value = null;

  document.getElementById("w12").value = null;
  document.getElementById("h12").value = null;
  document.getElementById("xOffset12").value = null;
  document.getElementById("yOffset12").value = null;

  document.getElementById("w13").value = null;
  document.getElementById("h13").value = null;
  document.getElementById("xOffset13").value = null;
  document.getElementById("yOffset13").value = null;

  document.getElementById("w14").value = null;
  document.getElementById("h14").value = null;
  document.getElementById("xOffset14").value = null;
  document.getElementById("yOffset14").value = null;

  document.getElementById("w15").value = null;
  document.getElementById("h15").value = null;
  document.getElementById("xOffset15").value = null;
  document.getElementById("yOffset15").value = null;

  document.getElementById("w16").value = null;
  document.getElementById("h16").value = null;
  document.getElementById("xOffset16").value = null;
  document.getElementById("yOffset16").value = null;

  document.getElementById("w17").value = null;
  document.getElementById("h17").value = null;
  document.getElementById("xOffset17").value = null;
  document.getElementById("yOffset17").value = null;
}

function reset() {
  resetHurt();
  resetHit();
}