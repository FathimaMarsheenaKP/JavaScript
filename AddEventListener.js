// document.addEventListener('keydown', (event) => {
//     alert(`Key pressed: ${event.key}`);
// });

// document.addEventListener('keyup', (event) => {
//     alert(`Key released: ${event.key}`);
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     alert("DOM loaded and parsed");
// });

// EVENT RELATED TO BROWSER
// window.addEventListener('resize', (event) => {
//     alert("Window resized")
// });

// window.addEventListener('scroll', () => {
//     alert("User is scrolling")
// });

// document.querySelector('#myForm').addEventListener('submit', (event) => {
//     event.preventDefault();
//     alert('Form submitted!');
// });

// document.querySelector('#myInput').addEventListener('change', (event) => {
//     alert(`Input changed to: ${event.target.value}`);
// });

// document.querySelector('#myInput').addEventListener('focus', () => {
//     alert('Input field focused!');
// })

// document.querySelector('#myInput').addEventListener('blur', () => {
//     alert('Input field lost focus!');
// });

document.querySelector('#myInput').addEventListener('input', () => {
    alert(`Current value: ${event.target.value}`);
});
