 
const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');
const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

stopButton.addEventListener('click', function() {
    console.log('Stop button clicked');
    stopLight.style.backgroundColor = 'red';
    slowLight.style.backgroundColor = 'black';
    goLight.style.backgroundColor = 'black';
}
);

slowButton.addEventListener('click', function() {
    stopLight.style.backgroundColor = 'black';
    slowLight.style.backgroundColor = 'yellow';
    goLight.style.backgroundColor = 'black';
});

goButton.addEventListener('click', function() {
    stopLight.style.backgroundColor = 'black';
    slowLight.style.backgroundColor = 'black';
    goLight.style.backgroundColor = 'green';
});
