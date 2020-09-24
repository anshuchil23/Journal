/*
  Hi Anshuman,

  I wanted to show you how you can create the same effect for making the elements visible
  with plain javascript (no library necessary).

  Basically the idea is to set a timeout on each letter, after which a class will be added.
  This class is styled to make the content have opacity 1 in the css.

  I added another styling rule that's chance based just to show how you have a lot more
  control over the design this way.
*/

// Wrap every letter in a span
var textWrapper = document.querySelector('.container');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Select all elements with class letter
var allLetters = document.querySelectorAll('.letter');

// Iterate over all of the letter elements
allLetters.forEach(function(element, i) {
  // Each element will have a function called after x ms based on its place in the array
  // Changing the multiplier will change the speed in which the letters appear
  var delayDuration = i * 150;

  // Execute a function after a timeout
  setTimeout(function() {
    // Add the "visible" class to the element (make sure it's styled in the css)
    element.classList.add('visible');

    // Extra chance-based things, feel free to ignore. It's just an example of things that you can do
    // beyond changing the classes.

    // Extra chance-based thing #1: randomize a color and apply it
    var hue = 0;
    var saturation = '10%';
    var lightness = (Math.floor(Math.random() * 50) + 50) + '%';
    var color = 'hsl(' + hue + ',' + saturation + ',' + lightness + ')';
    element.style.color = color;

    // // Extra chance-based thing #2: randomize a font-size and apply it
    var size = (Math.floor(Math.random() * 60) + 140) + 'px';
    element.style.fontSize = size;
  }, delayDuration);
})
