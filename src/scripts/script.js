

const h1 = document.querySelector('.h1');
h1.style.color = "red";

const changeColor = () => {
    if (h1.style.color == 'red') {
        h1.style.color = 'blue';
    } else {
        h1.style.color = 'red';
    };
};
window.setInterval(changeColor, 1000);

