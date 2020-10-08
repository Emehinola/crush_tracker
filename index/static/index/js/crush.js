var explanation;

function getClick() {
    explanation = document.getElementById('explanation');

    if (explanation.style.display == 'block') {
        explanation.style.display = 'none';
    } else {
        explanation.style.display = 'block';
    }
}

// function for animating the hearts-love in the home page
var counter = 0;

function animate() {
    var heart_one = document.getElementById('heart-one');
    var heart_two = document.getElementById('heart-two');
    var hear_three = document.getElementById('heart-three');

    if (counter == 0) {
        heart_one.style.color = 'white';
    }
    else if (counter == 1) {
        heart_two.style.color = 'white';
    }
    else {
        hear_three.style.color = 'white';
    }

    if (counter < 3) {
        counter++;
    }
    else {
        counter = 0;
    }

}

setInterval(() => {
    animate();
}, 1000);