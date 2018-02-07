var sliderForm = document.getElementById('slider');
var sliderValue = document.getElementById('demo');
var heightElem = document.getElementById('height');
var symbolForm = document.getElementById('symbol');


var symbolInput = symbolForm.value;
var height = heightElem.value;
drawPyramid(height, symbolInput);

// set a handler function for the symbol form
// set a global variable 'symbol' for drawPyramid use as a parameter


symbolForm.onchange = function(event) {
    symbolInput = symbolForm.value;
    height = heightElem.value;
    console.log(symbolInput);

    drawPyramid(height, symbolInput);
}

// set a handler function for the height slider form
// display the current slider range selection

sliderValue.innerHTML = heightElem.value;

sliderForm.oninput = function(event) {
    symbolInput = symbolForm.value;
    height = heightElem.value;
    sliderValue.innerHTML = height;
    
    drawPyramid(height, symbolInput);
}



// drawPyramid function
function drawPyramid(height, symbol) {
    
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {
        symbol = symbolInput;

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

