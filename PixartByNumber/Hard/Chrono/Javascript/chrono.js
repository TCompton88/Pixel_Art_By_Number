var myPage = document.querySelector('body');
var myHeader = document.querySelector('.mainHeader');
var buttonOne = document.querySelector('.colorOne');
var buttonTwo = document.querySelector('.colorTwo');
var buttonThree = document.querySelector('.colorThree');
var buttonFour = document.querySelector('.colorFour');
var buttonFive = document.querySelector('.colorFive');
var buttonSix = document.querySelector('.colorSix');
var buttonSeven = document.querySelector('.colorSeven');
var buttonEight = document.querySelector('.colorEight');
var buttonNine = document.querySelector('.colorNine');
var buttonTen = document.querySelector('.colorTen');
var allPixels = document.querySelectorAll('.pixel');
var buttonOneColor = getComputedStyle(buttonOne).backgroundColor;
var buttonTwoColor = getComputedStyle(buttonTwo).backgroundColor;
var buttonThreeColor = getComputedStyle(buttonThree).backgroundColor;
var buttonFourColor = getComputedStyle(buttonFour).backgroundColor;
var buttonFiveColor = getComputedStyle(buttonFive).backgroundColor;
var buttonSixColor = getComputedStyle(buttonSix).backgroundColor;
var buttonSevenColor = getComputedStyle(buttonSeven).backgroundColor;
var buttonEightColor = getComputedStyle(buttonEight).backgroundColor;
var buttonNineColor = getComputedStyle(buttonNine).backgroundColor;
var buttonTenColor = getComputedStyle(buttonTen).backgroundColor;
var colorOne = false;
var colorTwo = false;
var colorThree = false;
var colorFour = false;
var colorFive = false;
var colorSix = false;
var colorSeven = false;
var colorEight = false;
var colorNine = false;
var colorTen = false;
var isPressed = false;
var selectedColor;

console.log(allPixels.length);

allPixels.forEach(pixel => {
    if (pixel.innerHTML == "1" || pixel.innerHTML == "2" || pixel.innerHTML == "3" || pixel.innerHTML == "4" || pixel.innerHTML == "5" || pixel.innerHTML == "6" || pixel.innerHTML == "7" || pixel.innerHTML == "8" || pixel.innerHTML == "9" || pixel.innerHTML == "10") {
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
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonTwo.addEventListener('click', function () {
    if (selectedColor != buttonTwoColor) {
        selectedColor = buttonTwoColor;
        colorOne = false;
        colorTwo = true;
        colorThree = false;
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonThree.addEventListener('click', function () {
    if (selectedColor != buttonThreeColor) {
        selectedColor = buttonThreeColor;
        colorOne = false;
        colorTwo = false;
        colorThree = true;
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonFour.addEventListener('click', function () {
    if (selectedColor != buttonFourColor) {
        selectedColor = buttonFourColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = true;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonFive.addEventListener('click', function () {
    if (selectedColor != buttonFiveColor) {
        selectedColor = buttonFiveColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = false;
        colorFive = true;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonSix.addEventListener('click', function () {
    if (selectedColor != buttonSixColor) {
        selectedColor = buttonSixColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = false;
        colorFive = false;
        colorSix = true;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonSeven.addEventListener('click', function () {
    if (selectedColor != buttonSevenColor) {
        selectedColor = buttonSevenColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = true;
        colorEight = false;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonEight.addEventListener('click', function () {
    if (selectedColor != buttonEightColor) {
        selectedColor = buttonEightColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = true;
        colorNine = false;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonNine.addEventListener('click', function () {
    if (selectedColor != buttonNineColor) {
        selectedColor = buttonNineColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = true;
        colorTen = false;
    }
    console.log(selectedColor);
});

buttonTen.addEventListener('click', function () {
    if (selectedColor != buttonTenColor) {
        selectedColor = buttonTenColor;
        colorOne = false;
        colorTwo = false;
        colorThree = false;
        colorFour = false;
        colorFive = false;
        colorSix = false;
        colorSeven = false;
        colorEight = false;
        colorNine = false;
        colorTen = true;
    }
    console.log(selectedColor);
});

myPage.addEventListener('mousedown', function () {
    isPressed = true;
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
    allPixels[i].addEventListener('mousedown', function () {

        var myHtml = this.innerHTML;

        if (myHtml == "1") {
            if (selectedColor == buttonOneColor) {
                this.classList.add('onePixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }
        if (myHtml == "2") {
            if (selectedColor == buttonTwoColor) {
                this.classList.add('twoPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }
        if (myHtml == "3") {
            if (selectedColor == buttonThreeColor) {
                this.classList.add('threePixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }
        if (myHtml == "4") {
            if (selectedColor == buttonFourColor) {
                this.classList.add('fourPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }

        if (myHtml == "5") {
            if (selectedColor == buttonFiveColor) {
                this.classList.add('fivePixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }

        if (myHtml == "6") {
            if (selectedColor == buttonSixColor) {
                this.classList.add('sixPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }

        if (myHtml == "7") {
            if (selectedColor == buttonSevenColor) {
                this.classList.add('sevenPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }

        if (myHtml == "8") {
            if (selectedColor == buttonEightColor) {
                this.classList.add('eightPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }

        if (myHtml == "9") {
            if (selectedColor == buttonNineColor) {
                this.classList.add('ninePixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
            }
        }

        if (myHtml == "10") {
            if (selectedColor == buttonTenColor) {
                this.classList.add('tenPixel');
                this.classList.remove('pixel');
                this.innerHTML = " ";
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
                    this.innerHTML = " ";
                }
            }
            if (myHtml == "2") {
                if (selectedColor == buttonTwoColor) {
                    this.classList.add('twoPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }
            if (myHtml == "3") {
                if (selectedColor == buttonThreeColor) {
                    this.classList.add('threePixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }
            if (myHtml == "4") {
                if (selectedColor == buttonFourColor) {
                    this.classList.add('fourPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }

            if (myHtml == "5") {
                if (selectedColor == buttonFiveColor) {
                    this.classList.add('fivePixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }

            if (myHtml == "6") {
                if (selectedColor == buttonSixColor) {
                    this.classList.add('sixPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }

            if (myHtml == "7") {
                if (selectedColor == buttonSevenColor) {
                    this.classList.add('sevenPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }

            if (myHtml == "8") {
                if (selectedColor == buttonEightColor) {
                    this.classList.add('eightPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }

            if (myHtml == "9") {
                if (selectedColor == buttonNineColor) {
                    this.classList.add('ninePixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }

            if (myHtml == "10") {
                if (selectedColor == buttonTenColor) {
                    this.classList.add('tenPixel');
                    this.classList.remove('pixel');
                    this.innerHTML = " ";
                }
            }
        }
    });
}