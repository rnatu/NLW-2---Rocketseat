// Procurar o botão
document.querySelector('#add-time')

    // Quando clicar no botão
    .addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos (selecionando qual campo)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //limpar os campos (quais campos)
    const fields = newFieldContainer.querySelectorAll('input');

    //limpando os valores dos inputs 0 e 1 (campos)
    fields.forEach((idx) => {
        idx.value = "";
    })

    // Colocar na página (onde colocar)
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}