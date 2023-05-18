$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDanovaImagem = $("#endereco_imagem").val();
        const novoItem = $("<li style = 'display: none'>");
        $(`<img src="${enderecoDanovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="image_link">
                <p><a href="${enderecoDanovaImagem}" title="Tamanho real" target="_blank">ver imagem original</a></p>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $("#endereco_imagem").val("");
    })
})