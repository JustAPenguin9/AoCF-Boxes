const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");

function updateBG() {
  var character = document.getElementById('character').value;
  var sprite = document.getElementById('sprite').value;

  if(sprite !== "") {
    var background = new Image();
    background.src = `../${character.trim()}/${sprite.trim()}.png`
    background.onload = function() {
      canvas.width = background.width;
      canvas.height = background.height;
      c.drawImage(background,0,0,);
    }

    console.log(character)
    console.log(sprite)
    console.log(background.src)
    console.log("")
  } else {
    console.log("no image source")
  }
}

function reset() {
  c.beginPath();
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.stroke();

  updateBG();
}

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
  console.log("drew box")
}

function draw() {
  //hurtboxes
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
  drawRect(
    "#00ff00",
    document.getElementById("w8").value,
    document.getElementById("h8").value,
    document.getElementById("xOffset8").value,
    document.getElementById("yOffset8").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w9").value,
    document.getElementById("h9").value,
    document.getElementById("xOffset9").value,
    document.getElementById("yOffset9").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w10").value,
    document.getElementById("h10").value,
    document.getElementById("xOffset10").value,
    document.getElementById("yOffset10").value
  )

  //hitboxes
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
  drawRect(
    "#ff0000",
    document.getElementById("w18").value,
    document.getElementById("h18").value,
    document.getElementById("xOffset18").value,
    document.getElementById("yOffset18").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w19").value,
    document.getElementById("h19").value,
    document.getElementById("xOffset19").value,
    document.getElementById("yOffset19").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w20").value,
    document.getElementById("h20").value,
    document.getElementById("xOffset20").value,
    document.getElementById("yOffset20").value
  )
}