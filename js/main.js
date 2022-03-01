
// Inicializa o WOW JS
new WOW().init();

$(document).ready(function () {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#65DAF9',
        strokeWidth: 4,
        duration: 1400,
        from: { color: '#aaa' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 12);
            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#65DAF9',
        strokeWidth: 4,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 200);
            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#65DAF9',
        strokeWidth: 4,
        duration: 1800,
        from: { color: '#aaa' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 100);
            circle.setText(value);

        }

    });


    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#why-us').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }

    });
});

// Botao para voltar ao topo
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}