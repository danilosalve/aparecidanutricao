var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {

    event.target.parentNode.classList.add("fadeOut");

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') {
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }
});