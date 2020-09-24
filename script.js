// Wrap every letter in a span
//Your animation is cool but I feel like having it go faster is better to drawing people in
var textWrapper = document.querySelector('.container');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.container .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 100,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.container',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
    delay: 1000
  });
