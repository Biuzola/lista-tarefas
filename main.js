$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
        $('#nome-tarefa').val(''); 
    });

    $(document).on('click', 'ul li', function() {
        $(this).toggleClass('riscado');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val().trim(); 

        if (nomeTarefa) {
            const novoItem = $(`<li style="display: none">${nomeTarefa}</li>`);
            novoItem.appendTo('ul').fadeIn(1000); 
            $('#nome-tarefa').val(''); 
        }
    });

    $('#btn-apagar-lista').click(function() {
        $('ul').empty(); 
    });
});
