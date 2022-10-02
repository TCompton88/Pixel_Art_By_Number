var myPage = document.querySelector('body');
var myHeader = document.querySelector('.mainHeader');
var buttonOne = document.querySelector('.colorOne');
var buttonTwo = document.querySelector('.colorTwo');
var buttonThree = document.querySelector('.colorThree');
var allPixels = document.querySelectorAll('.pixel');
var buttonOneColor = getComputedStyle(buttonOne).backgroundColor;
var buttonTwoColor = getComputedStyle(buttonTwo).backgroundColor;
var buttonThreeColor = getComputedStyle(buttonThree).backgroundColor;
var colorOne = false;
var colorTwo = false;
var colorThree = false;
var isPressed = false;
var selectedColor;

console.log(allPixels.length);

allPixels.forEach(pixel => {
    if (pixel.innerHTML == "1" || pixel.innerHTML == "2" || pixel.innerHTML == "3") {
        pixel.classList.add('colorable');
    }
});

var colorBlocks = document.querySelectorAll('.colorable');

var colorableNum = colorBlocks.length;
console.log(colorableNum);

buttonOne.addEventListener('click', function () {
    if (selectedColor != buttonOneColor) {
        selectedColor = buttonOneColor;
        colorOne = true;
        colorTwo = false;
        colorThree = false;
    }
    console.log(selectedColor);
});

buttonTwo.addEventListener('click', function () {
    if (selectedColor != buttonTwoColor) {
        selectedColor = buttonTwoColor;
        colorOne = false;
        colorTwo = true;
        colorThree = false;
    }
    console.log(selectedColor);
});

buttonThree.addEventListener('click', function () {
    if (selectedColor != buttonThreeColor) {
        selectedColor = buttonThreeColor;
        colorOne = false;
        colorTwo = false;
        colorThree = true;
    }
    console.log(selectedColor);
});

myPage.addEventListener('mousedown', function () {
    isPressed = true;
    console.log(isPressed);
});

myPage.addEventListener('mouseup', function () {
    isPressed = false;
});

myPage.addEventListener('mousemove', function () {
    var uncoloredPixels = document.querySelectorAll('.pixel');
    //console.log(uncoloredPixels.length);

    if (uncoloredPixels.length <= allPixels.length - colorableNum) {
        myHeader.classList.add('finished');
    }
});

for (var i = 0; i < allPixels.length; i++) {
    allPixels[i].addEventListener('click', function () {

        var myHtml = this.innerHTML;

        if (myHtml == "1") {
            if (selectedColor == buttonOneColor) {
                this.classList.add('onePixel');
                this.classList.remove('pixel');
                // this.style.backgroundColor = selectedColor;
                this.innerHTML = " ";
                // this.classList.add('borderless');
                console.log(selectedColor);
            }
        }
        if (myHtml == "2") {
            if (selectedColor == buttonTwoColor) {
                this.classList.add('twoPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
                // this.classList.add('borderless');
                console.log(selectedColor);
            }
        }
        if (myHtml == "3") {
            if (selectedColor == buttonThreeColor) {
                this.classList.add('threePixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
                // this.classList.add('borderless');
                console.log(selectedColor);
            }
        }
    });
}

for (var i = 0; i < allPixels.length; i++) {
    allPixels[i].addEventListener('mousemove', function () {

        var myHtml = this.innerHTML;

        if (isPressed == true) {
            if (myHtml == "1") {
                if (selectedColor == buttonOneColor) {
                    this.classList.add('onePixel');
                    this.classList.remove('pixel');
                    // this.style.backgroundColor = selectedColor;
                    this.innerHTML = " ";
                    // this.classList.add('borderless');
                    console.log(selectedColor);
                }
            }
            if (myHtml == "2") {
                if (selectedColor == buttonTwoColor) {
                    this.classList.add('twoPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                    // this.classList.add('borderless');
                    console.log(selectedColor);
                }
            }
            if (myHtml == "3") {
                if (selectedColor == buttonThreeColor) {
                    this.classList.add('threePixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                    // this.classList.add('borderless');
                    console.log(selectedColor);
                }
            }
        }
    });
}