let hostName = document.location.href;
let hostNameLink = document.querySelector('.host-name');
hostNameLink.innerHTML = hostName;
hostNameLink.href = hostName;
const slider = new Slider;
slider.start('itk-slider', arr_png);