addEventListener('load', function(){
    chargeNavBar();
    
});


function chargeNavBar(){
    fetch('nav.html')
    .then(response => response.text())
    .then((html) => {
        console.log(html);
        const header = document.getElementById('header');
        header.insertAdjacentHTML('beforeend', html);
        validateURL();
    });
}

function validateURL(){

    switch(window.location.href){
        case 'http://localhost/2%c2%baDAW/MONFAB/1_PracticaUno/p1.html':
            const btn1 = document.getElementById('btn1');
            btn1.style.backgroundColor="orange";
            break;
        case 'http://localhost/2%c2%baDAW/MONFAB/1_PracticaUno/p2.html':
            const btn2 = document.getElementById('btn2');
            btn2.style.backgroundColor="orange";
            break;
        case 'http://localhost/2%c2%baDAW/MONFAB/1_PracticaUno/p3.html':
            const btn3 = document.getElementById('btn3');
            btn3.style.backgroundColor="orange";
            break;
        case 'http://localhost/2%c2%baDAW/MONFAB/1_PracticaUno/p4.html':
            const btn4 = document.getElementById('btn4');
            btn4.style.backgroundColor="orange";
            break;
        case 'http://localhost/2%c2%baDAW/MONFAB/1_PracticaUno/p5.html':
            const btn5 = document.getElementById('btn5');
            btn5.style.backgroundColor="orange";
            break;
    }
}